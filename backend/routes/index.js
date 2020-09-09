var express = require('express');
var router = express.Router();

let conn = require('./dbConfig');
let func = require('./func');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/signup', function(req, res){
  res.render('signup');
})

router.post('/signup', function(req, res){
  func.signup(req, res);
})

// router.get('/login', function(req, res){
//   res.render('login');
// })

router.post('/login', function(req, res){
  func.login(req, res);
});

router.get('/post', function(req, res){
  res.render('post');
});


router.post('/post', function(req, res){
  func.post(req, res);
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
  postId = req.query.postId;
  sql = "select post_title, post_cus, DATE_FORMAT(post_date, '%Y-%m-%d') as post_date,DATE_FORMAT(post_travel_date, '%Y-%m-%d') as post_travel_date, post_cont from post where postId=?";
  conn.query(sql, [postId], function(err, results){
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
