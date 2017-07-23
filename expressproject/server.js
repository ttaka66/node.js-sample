var express = require("express");
var app = express();

var morgan = require("morgan"); // ログを表示させるmiddleware

app.use(morgan("dev")); // middlewareを使うためにはuse

// {
// 	title: "",
// 	author: "",
// 	body: ""
// }

var articles = [];

// read
app.get("articles", function(req, res){
	res.json(articles);
});

// create
app.post("articles", function(req, res){
	articles.push(req.body);
	res.redirect("/articles");
});

// read(個別)
app.get("articles/:id", function(req, res){

});

// update
app.put("articles/:id", function(req, res){

});

// delete
app.delete("articles/:id", function(req, res){
	res.json(articles);
});

app.listen(3000, function(){
	console.log("Running on port 3000")
});
