var express = require('express');
var app = express();


//testing jenkin slave 2

app.get('/',function(req,res) {
  res.send("<h1>Hello world</h1>");
});

app.listen(4000);
