var http = require("http"); // httpはコアモジュール
var server = http.createServer();

var url = require("url");

server.on("request", function(req, res){
	// console.log("request caught");
	// res.writeHead(200);
	// res.end("Hello, World!");
	console.log(req.url);
});

server.listen(3000);
