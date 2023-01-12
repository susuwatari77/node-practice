var express = require('express');
var router = express.Router();
var fireDB = require("../connections/firebase_admin_connect");
const {check, validationResult} = require("express-validator");

router.post('/', [check("content", "內容不能為空值").notEmpty()], function (req, res) {
    var errors = validationResult(req);
    if(errors.errors != "") {
        // console.log(errors, errors.errors);
        req.flash('errors', errors.errors[0].msg);
        res.redirect("/");
    } else {
        // console.log(errors);
        fireDB.ref("/user/"+req.session.uid).once("value", function(snapshot) {
            console.log(snapshot.val());
            var nickname = snapshot.val().nickname;
            var ref = fireDB.ref('message_list').push(); // 產生節點 還未放入資料
            var list_content = {
                nickname: nickname,
                content: req.body.content
            }
            ref.set(list_content)
            .then(function() {
                res.redirect("/");
            })
        });
    }
})
module.exports = router;