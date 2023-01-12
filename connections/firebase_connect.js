var express = require('express');
var {initializeApp} = require("firebase/app");
var fireAuth = require("firebase/auth");

const firebaseConfig = {
    apiKey: "AIzaSyAh5WH69tUc4E2DGFowiTqydIoKB0tUcRo",
    authDomain: "testiot-24287.firebaseapp.com",
    databaseURL: "https://testiot-24287.firebaseio.com",
    projectId: "testiot-24287",
    storageBucket: "testiot-24287.appspot.com",
    messagingSenderId: "410282195391",
    appId: "1:410282195391:web:16a7f171e4dc082cc2c90a"
  };

var app = initializeApp(firebaseConfig);
fireAuth.initializeAuth(app);

module.exports = fireAuth;
