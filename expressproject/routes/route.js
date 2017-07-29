var articles = [];
// {
// 	title: "",
// 	author: "",
// 	body: ""
// }

module.exports = function(express){

	var router = express.Router();

	router.route("/articles")
		.get(function(req, res){
			res.json(articles);
		}).post(function(res, req){
			articles.push(req.body);
			res.redirect("/articles");
		});

	// read(個別)
	router.route("/articles/:id")
		.get(function(req, res){

		}).put(function(req, res){

		}).delete(function(req, res){

		});

	return router;
};
