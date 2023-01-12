var express = require('express');
var router = express.Router();
const fireDB = require('../connections/firebase_admin_connect');
var fireAuth = require("../connections/firebase_connect");

router.get('/', function (req, res) {
    res.render('signup', { title: '註冊', error:  req.flash("error")});
})

router.post('/', function (req, res) {
    
    // console.log(req.body);
    var email = req.body.email;
    var password = req.body.passwd;
    var username = req.body.nickname;
    console.log(email, password);
    fireAuth.createUserWithEmailAndPassword(fireAuth.getAuth(), email, password)
    .then(function(user) {
        // console.log(user, user.user.uid);
        var saveUser = {
            'email': email,
            'nickname': username,
            'uid': user.user.uid
        };
        fireDB.ref("/user/"+user.user.uid).set(saveUser);
        res.redirect("/signup/success");
    })
    .catch(function(error) {
        // console.log(error);
        var errorMessage = error.message;
        req.flash("error", errorMessage);
        res.redirect("/signup")
    })
})
router.get('/success',function(req,res){
    console.log(req.body);
    res.render('success',{
        title:'註冊成功'
    });
})
module.exports = router;