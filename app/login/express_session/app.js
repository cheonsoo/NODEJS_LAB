const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt-nodejs'); // 3장에서 사용할 암호화 모듈
　
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
　
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    secret: 'SECRET_KEY',
    resave: false,
    saveUninitialized: true
}));


const users = [
    {
        user_id: 'cpark',
        user_nickname: 'imcpark',
        user_pwd: 'cpark'
    },
    {
        user_id: 'mansoo',
        user_nickname: 'immansoo',
        user_pwd: 'mansoo'
    }
];

const findUser = (user_id, user_pwd) => {
    // id와 password가 일치하는 유저 찾는 함수, 없으면 undefined 반환
    return users.find( v => (v.user_id === user_id && v.user_pwd === user_pwd) );
}
const findUserIndex = (user_id, user_pwd) => {
    // 일치하는 유저의 index값(유니크) 반환
    return users.findIndex( v => (v.user_id === user_id && v.user_pwd === user_pwd) );
}

/*
const findUser = (user_id, user_pwd) => {
    // id와 password가 일치하는 유저 찾는 함수, 없으면 undefined 반환
    return users.find( v => (v.user_id === user_id &&  bcrypt.compareSync(user_pwd, v.user_pwd) ) );
}
const findUserIndex = (user_id, user_pwd) => {
    // 일치하는 유저의 index값(유니크) 반환
    return users.findIndex( v => (v.user_id === user_id && bcrypt.compareSync(user_pwd, v.user_pwd)) );
}
*/

app.get('/', (req, res) => {
    const sess = req.session; // 세션 객체에 접근
    res.render('index', {
        nickname: sess.hasOwnProperty('user_uid') ? users[sess.user_uid]['user_nickname'] : ''
    });
});

app.get('/login', (req, res) => {
    res.render('login'); // login.ejs 랜더링
});
app.post('/login', (req, res) => {
    const body = req.body; // body-parser 사용
    if( findUser( body.user_id, body.user_pwd ) ) {
    // 해당유저가 존재한다면
        req.session.user_uid = findUserIndex( body.user_id, body.user_pwd ); //유니크한 값 유저 색인 값 저장
        res.redirect('/');
    } else {
        res.send('유효하지 않습니다.');
    }
});

app.get('/logout', (req, res) => {
    delete req.session.user_uid;
    res.redirect('/');
});

app.post('/join', (req, res) => {
    const body = req.body;
    if( !findUser(body.user_id, body.user_pwd) ) {
    	// 아이디도 중복안되게 분기 해야는데 예제이므로..
        const salt = bcrypt.genSaltSync(10); // salt값 생성, 10이 default
        const hash = bcrypt.hashSync(body.user_pwd, salt); // Digest
        users.push({
            user_id: body.user_id,
            user_pwd: hash,
            user_nickname: body.user_nickname
        });
    	res.redirect('/login');
    } else {
    	res.send('이미 존재함');
    }
});

app.listen(3000, function() {
    console.log('server listen port 3000');
});