var express = require('express')
var admin = require("firebase-admin");

var serviceAccount = require("./testiot-24287-firebase-adminsdk-wc4yq-10a691a203.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://testiot-24287.firebaseio.com"
});
var fireDB = admin.database();

// self-test
// fireData.ref('todos').set({"title":123})
// .then(function() {
//     fireData.ref('todos').once('value', function(snapshot) {
//         console.log(snapshot.val());
//     })    
// });

module.exports = fireDB;