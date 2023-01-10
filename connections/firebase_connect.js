var express = require('express')
var admin = require("firebase-admin");

var serviceAccount = require("./testiot-24287-firebase-adminsdk-wc4yq-10a691a203.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://testiot-24287.firebaseio.com"
// });
// var app = admin.app();
// console.log(app.auth());
// fireData.ref('todos').set({"title":123})
// .then(function() {
//     fireData.ref('todos').once('value', function(snapshot) {
//         console.log(snapshot.val());
//     })    
// });

module.exports = admin;
// var express = require('express')
// // const {initializeApp} = require("firebase/app");
// var fire = require("firebase");

// const firebaseConfig = {
//     apiKey: "AIzaSyAh5WH69tUc4E2DGFowiTqydIoKB0tUcRo",
//     authDomain: "testiot-24287.firebaseapp.com",
//     databaseURL: "https://testiot-24287.firebaseio.com",
//     projectId: "testiot-24287",
//     storageBucket: "testiot-24287.appspot.com",
//     messagingSenderId: "410282195391",
//     appId: "1:410282195391:web:16a7f171e4dc082cc2c90a"
//   };

// // Initialize Firebase
// // var app = initializeApp(firebaseConfig);
// var app = fire.initializeApp(firebaseConfig);
// // console.log(firebase.app().name);
// // console.log(firebase.auth());
// module.exports = app;