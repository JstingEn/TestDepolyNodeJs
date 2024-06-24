// const users = require('./db')
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
var http = require('http');
var fs = require("fs");

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// const bodyParser = require('body-parser')
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

// app.get("/", (req, res) => {
//   res.send("Hello! Node.js");
// });


// app.get('/user', function (req, res) {
//   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//      res.end( data );
//   });
// })
app.get('/', function (req, res) {
  fs.readFile( __dirname + "/" + "index.html", 'utf8', function (err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
})


app.get('/user/:id', function (req, res) {
  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
     var users = JSON.parse( data );
     var user = users["user" + req.params.id] 
    res.end( JSON.stringify(user));
  });
})

app.post('/post/test101', function (req, res) {
  var json = req.body
  fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
    res.setHeader("Content-Type", "application/json");
    res.end( json );  
  });
})

// app.get('/test', function (req, res) {
//   const http1 = require('https');

//  let urlToPrint = "https://script.google.com/macros/s/AKfycbywlY2ETj74wE9Ok8LztJaTlxdMumOKVEmwKY9g7LB9xDREMMscMS5TtZiX28QKm554GQ/exec"


//  let req1 = http1.get(urlToPrint, function(res) {
//    let data = '',
//      json_data;
 
//    res.on('data', function(stream) {
//      data += stream;
//    });
//    res.on('end', function() {
//      json_data = JSON.parse(data);
 
//      // will output a Javascript object
//      console.log(json_data);
//    });
//  });
 
//  req1.on('error', function(e) {
//      console.log(e.message);
//  });
// })











app.listen(port, () => {
  console.log("Starting node.js at port " + port);
});