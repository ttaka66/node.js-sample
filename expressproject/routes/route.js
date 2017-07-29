var articles = [];
// {
// 	title: "",
// 	author: "",
// 	body: ""
// }

module.exports = function(express){

	var router = express.Router();

	// read
	router.get("articles", function(req, res){
		res.json(articles);
	});

	// create
	router.post("articles", function(req, res){
		articles.push(req.body);
		res.redirect("/articles");
	});

	// read(個別)
	router.get("articles/:id", function(req, res){

	});

	// update
	router.put("articles/:id", function(req, res){

	});

	// delete
	router.delete("articles/:id", function(req, res){
		res.json(articles);
	});

	return router
};
