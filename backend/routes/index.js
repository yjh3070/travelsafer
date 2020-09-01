var express = require('express');
var router = express.Router();
let pbkfd2Password = require('pbkdf2-password');
let hasher = pbkfd2Password();

let conn = require('../dbConfig');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signup', function(req, res){
  res.render('signup');
})

router.post('/signup', function(req, res){
  let id = req.body.cusId;
    let pw = req.body.cus_pass;
    let pw_check = req.body.cus_pass_check;
    let name = req.body.cus_name;
    let address = req.body.cus_add;
    let address2 = req.body.cus_add2;
    let postalCode = req.body.cus_postalCode;
    let phone = req.body.cus_phone;
    let birthday = req.body.birthday;
    let sex = Number(req.body.cus_sex);
    let saltdb = '';

    if(pw != pw_check)
        res.send('비밀번호가 일치하지 않습니다');

    hasher({password: pw}, function(err, pass, salt, hash){
        saltdb = salt;
        pw = hash;
    });

    let sql = 'INSERT INTO customer VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    setTimeout(() => {conn.query(sql, [id, name, pw, saltdb, address, address2, postalCode, phone, birthday, sex], function(err, results) {
        if(err){
          res.send('회원가입 실패');
          console.log(err);
        }
        else{
          res.render('signupS');
        }
    })}, 1000);
})

router.get('/login', function(req, res){
  res.render('login');
})

router.post('/login', function(req, res){
  let id = req.body.username;
    let pw = req.body.password;
    let sql = 'SELECT * FROM customer WHERE cusId=?';

    conn.query(sql, [id], function(err, results){
        if(err)
            res.send('아이디 또는 비밀번호를 확인하세요');

        let user = results[0];

        hasher({password: pw, salt: user.cus_salt}, (err, pass, salt, hash) => {
            if(hash === user.cus_pass){
              req.session.user = id;
              console.log(req.session.user);
              res.render('loginS');
            }
            else{
              res.send('아이디 또는 비밀번호를 확인하세요');
            }
        });   
    })
});

router.get('/post', function(req, res){
  res.render('post');
});


router.post('/post', function(req, res){
  let today = new Date();
  
  let id;
  let country = req.body.country;
  let title = req.body.title;
  let img;
  let travel_date = req.body.travel_date;
  let content = req.body.content;
  let post_date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let customer = req.session.user;

  let sql = "select max(postId) as maxid from post;";
  conn.query(sql, function(err, results){
      if(err){
          console.log(err);
          res.send('게시물 작성 실패');
      }else{
          id = results[0].maxid + 1;
          console.log(id);
          post_insert();
      }
  })

  function post_insert(){
      let sql = "insert into post values(?, ?, ?, ?, ?, ?, ?, ?)";
      conn.query(sql, [id, customer, country, title, img, travel_date, content, post_date], function(err, results){
          if(err){
              console.log(err);
              res.send('게시물 작성 실패');
          }
          else
              res.render('postS');
              // res.send('게시물 작성 성공');
      })
  }
  
});

router.get('/board', function(req, res){
  let sql = "select post_title, post_coun, DATE_FORMAT(post_date, '%Y-%m-%d') as post_date from post order by postId desc;";
  conn.query(sql, function(err, results){
      if(err){
          console.log(err);
          res.send('게시물 불러오기 실패')
      }
      else{
          console.log(results);
          res.render('board', {
              results: results
          });
      }
  });
});

router.get('/view', function(req, res){
  page = req.query.page;
  sql = "select post_title, post_cus, DATE_FORMAT(post_date, '%Y-%m-%d') as post_date,DATE_FORMAT(post_travel_date, '%Y-%m-%d') as post_travel_date, post_cont from post where postId=?";
  conn.query(sql, [page], function(err, results){
      if(err){
          res.send('게시물 불러오기 실패');
      }
      else{
          res.render('view', {
              results: results
          });
      }
  });
});

router.get('/modify', function(req, res){
  let sql = "select cus_name, cus_add, cus_add2, cus_postalCode, cus_phone, DATE_FORMAT(cus_birthday, '%Y-%m-%d') as cus_birthday, cus_sex from customer where cusId = '" + req.session.user + "';";
  conn.query(sql, function(err, results){
      if(err){
          console.log(err);
          res.send('회원정보 불러오기 실패');
      }else{
          console.log(sql);
          console.log(results);
          res.render('modify', {
              results: results
          });
      }
  });
});

router.post('/modify', function(req, res){
  let name = req.body.cus_name;
  let address = req.body.cus_add;
  let address2 = req.body.cus_add2;
  let postalCode = req.body.cus_postalCode;
  let phone = req.body.cus_phone;
  let birthday = req.body.birthday;
  let sex = Number(req.body.cus_sex);

  let sql = "update customer set cus_name = ?, cus_add = ?, cus_add2 = ?, cus_postalCode = ?, cus_phone = ?, cus_birthday = ?, cus_sex = ? where cusId = ?";
  conn.query(sql, [name, address, address2, postalCode, phone, birthday, sex, req.session.user], function(err, results){
      if(err){
          console.log(err);
          res.send("회원정보 수정 실패");
      }else{
          res.render('modifyS');
      }
  });
});


module.exports = router;
