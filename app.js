 var app = require('express')()


 app.get('/',function(req,res){
	res.send("First page");
 })

 app.listen(3000, function(){
	console.log("Listening on 3000")
 })
