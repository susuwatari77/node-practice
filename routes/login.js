var express = require('express');
var router = express.Router();
var fireDB = require("../connections/firebase_admin_connect");

router.get('/', function (req, res) {
    fireDB.ref('todos').once('value', function (snapshot) {
        console.log(snapshot.val());
    });
    res.render('login', { title: '登入' });
})
router.post('/', function (req, res) {
    
})
module.exports = router;