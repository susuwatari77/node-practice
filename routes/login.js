var express = require('express');
var router = express.Router();
const fireDB = require('../connections/firebase_admin_connect');
var fireAuth = require("../connections/firebase_connect");


router.get('/', function (req, res) {
    res.render('login', { title: '登入' });
})
router.post('/', function (req, res) {
    fireAuth.signInWithEmailAndPassword(fireAuth.getAuth(), req.body.email, req.body.passwd)
    .then(function (user) {  
        console.log("登入成功");
        req.session.uid = user.user.uid;
        res.redirect("/");
    })
    .catch(function (error) {
        if (error.message.indexOf("user-not-found")!=-1)
        {
            console.log("無此使用者!!");
        } else if (error.message.indexOf("wrong-password")!=-1)
        {
            console.log("登入失敗!!")
        }
    })
})
module.exports = router;