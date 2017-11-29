var express = require('express');
var app = express();

<<<<<<< HEAD
app.get('/',function(req,res) {
  res.send("Hello World");
});

app.listen(4000);
=======
 // Lets see if this triggers the build
 // test 1
 app.get('/',function(req,res){
	res.send("First page");
 })

 app.listen(3000, function(){
	console.log("Listening on 3000")
 })
>>>>>>> cb4d99759215231061c43526a8623cb267f5ddbd
