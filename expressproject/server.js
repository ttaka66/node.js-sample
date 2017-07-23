var express = require("express");
var app = express();

var morgan = require("morgan"); // ログを表示させるmiddleware

app.use(morgan("dev")); // middlewareを使うためにはuse

app.get("/hello/:name", function(req, res){
	res.send("Hello, " + req.params.name);
});

app.get("/hello", function(req, res){
	res.send("Hello, world!");
});

app.get("/goodbye", function(req, res){
	res.send("Good-bye, world!");
});

app.all("*", function(req, res){
	res.sendStatus(404);
});

app.listen(3000, function(){
	console.log("Running on port 3000")
});
