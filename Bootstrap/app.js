var express = require('express');
var app = express();
var http = require('http');
var fs = require("fs");

app.use(express.static(__dirname + "/Bootstrap"));

app.get("/", function(httpRequest, httpResponse, next){
     httpResponse.sendFile(__dirname + "/Bootstrap/home.html");
})

var server = app.listen(8080, function () {
  var port = server.address().port
  console.log("http://localhost:%s", port)
})