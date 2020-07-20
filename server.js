let express = require('express');
let bodyParser = require('body-parser');
let ejs = require('ejs');
let dbConfig = require('./dbConfig');
let crypto = require('crypto');
let sessionParser = require('express-session');
let multer = require('multer');

let func = require('./func');

let app = express();

let conn = require('./dbConfig');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({extended: false}));
app.use(sessionParser({
    secret: 'gsmtravelsafer',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 24000 * 60 * 60 // 쿠키 유효기간 24시간
    }
}))

app.get('/', function(req, res){
    res.render('index');
});

app.get('/conn', function(req, res){
    sql = "select * from country;";
    conn.query(sql, function(err, results){
        if(err){
            console.log(err);
            res.send('select 실패');
        }else{
            res.send('select 성공');
        }
    });
    // res.send('');
});

app.get('/signup', function(req, res){
    res.render('signup');
})

app.post('/signup', function(req, res){
    func.signup(req, res);
})

app.get('/login', function(req, res){
    res.render('login');
})

app.post('/login', function(req, res){
    func.login(req, res);
});

app.get('/post', function(req, res){
    res.render('post');
});

let upload = multer({dest: 'public/images/', limits: {fieldSize: 5*1024*1024}});

app.post('/post', function(req, res){
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
        id = results[0].maxid + 1;
        console.log(id);
        post_insert();
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

app.get('/board', function(req, res){
    let sql = "select post_title, post_coun, DATE_FORMAT(post_date, '%Y-%m-%d') as post_date from post order by postId desc;";
    conn.query(sql, function(err, results){
        if(err){
            console.log(err);
            res.send('게시물 불러오기 실패')
        }
        else{
            res.render('board', {
                results: results
            });
        }
    });
});

app.get('/view', function(req, res){
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

/*
app.get('/test', function(req, res){
    res.render('testimg');
})

app.post('/test', function(req, res){
    let cnt = req.body.cnt;
    // let array = new Array();
    // for(let i = 0; i < cnt; i++){
    //     array.push(req.body.name[i]);
    //     console.log(array[i]);
    // }
    

    // console.log(req.body.name[0]);
    res.send(req.body);
});
*/

// let hostname = '10.128.0.14';
// let hostname = '35.223.37.46';

// app.listen(3030, hostname, function(){
//     console.log('포트 3030 실행중!');
// });

app.listen(8080, function(){
    console.log('포트 3030 실행중!');
});