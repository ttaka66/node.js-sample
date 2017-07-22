var http = require("http"); // httpはコアモジュール
var server = http.createServer();

server.on("request", function(req, res){
	console.log("request caught");
	res.writeHead(200);
	res.end("Hello, World!");
});

server.listen(3000);
