var express = require('express');
var router = express.Router();
var firebase = require("../connections/firebase_connect");
var fireAuth = firebase.auth();

router.get('/', function (req, res) {
    // console.log(firebase.auth().createUser({}));
    res.render('signup', { title: '註冊'});
})

router.post('/', function (req, res) {
    
    // console.log(req.body);
    var email = req.body.email;
    var password = req.body.passwd;
    var user = req.body.nickname;
    console.log(email, password);
    firebase.auth().createUser({'email':email, 'password':password})
    .then(function(user) {
        console.log(user);
        res.redirect("/signup/success");
    })
    .catch(function(error) {
        console.log(error);
    })
})
router.get('/success',function(req,res){
    console.log(req.body);
    res.render('success',{
        title:'註冊成功'
    });
})
module.exports = router;