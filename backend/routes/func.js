let pbkfd2Password = require('pbkdf2-password');
let hasher = pbkfd2Password();

let conn = require('./dbConfig');

exports.signup = function(req, res){
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
}

exports.login = function(req, res){
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
}

exports.post = function(req, res){
    let today = new Date();
    let id, img;
    let country = req.body.country;
    let title = req.body.title;
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
        })
    }
}