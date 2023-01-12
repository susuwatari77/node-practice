var express = require('express');
var router = express.Router();
var fireDB = require("../connections/firebase_admin_connect");
var firebase = require("../connections/firebase_connect");

router.get('/', function (req, res, next) {
    // console.log(firebase.auth());
    // fireDB.ref('todos').once('value', function (snapshot) {
    //     console.log(snapshot.val());
    // });
    fireDB.ref('message_list').once("value", function(snapshot) {
        var auth = req.session.uid;
        res.render('index', {
            title: '六角學院留言板',
            auth: auth,
            errors: req.flash('errors'),
            message_list: snapshot.val()
        });    
    });
    
});
/* GET home page. */
module.exports = router;