var express = require("express");
var app = express();

var morgan = require("morgan"); // ログを表示させるmiddleware

app.use(morgan("dev")); // middlewareを使うためにはuse

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var articles = [];

var router = require("./routes/route")(express);

app.use("/", router)

app.listen(3000, function(){
	console.log("Running on port 3000")
});
