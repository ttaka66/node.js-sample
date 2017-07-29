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
		}).post(function(req, res){
			articles.push(req.body);
			res.redirect("/articles");
		});

	// read(個別)
	router.route("/articles/:id")
		.get(function(req, res){

		}).put(function(req, res){

		}).delete(function(req, res){

		});

	router.get("/new", function(req, res){
		res.send('<form method="post" action="/articles">\
			<input type="text" placeholder="タイトル" name="title">\
			<input type="text" placeholder="技術者" name="author">\
			<textarea placeholder="内容" name="body"></textarea>\
			<button type="submit">投稿する</body>');
	});

	return router;
};
