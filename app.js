var express = require('express');
var app = express();


//testing jenkin slave 1

app.get('/',function(req,res) {
  res.send("Hello World");
});

app.listen(4000);
