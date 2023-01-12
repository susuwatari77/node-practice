var express = require('express');
var router = express.Router();
var fireDB = require("../connections/firebase_admin_connect");

router.get('/', function (req, res) {
    console.log(req.session.uid);
    fireDB.ref("/user/"+req.session.uid).once("value", function(snapshot){
        // console.log(snapshot.val());
        res.render('user', { title: '會員專區', nickname: snapshot.val().nickname});
    });
    // res.render('user', { title: '會員專區'});
})
module.exports = router; 