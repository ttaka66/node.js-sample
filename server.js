var http = require("http"); // httpはコアモジュール
var server = http.createServer();

var url = require("url");

server.on("request", function(req, res){
	// console.log("request caught");
	// res.writeHead(200);
	// res.end("Hello, World!");
	console.log(req.url);
	var incomingURL = url.parse(req.url);
	console.log(incomingURL);

	if (incomingURL.path === "/hello") {
		res.writeHead(200);
		res.end("Hello, World!");
	} else if (incomingURL.path === "/goodbye"){
		res.writeHead(200);
		res.end("Good-bye, World!");
	}else {
		res.writeHead(200);
		res.end("Resource not found.");
	}
});

server.listen(3000);
