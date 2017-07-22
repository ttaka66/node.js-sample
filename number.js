var func_one = function(callback){
	console.log("The first ...");
	if (callback) {
		callback();
	}
}

var func_two = function(callback){
	console.log("the second ...");
	if (callback) {
		callback();
	}
};

var func_three = function(callback){
	console.log("... and the third");
	if (callback) {
		callback();
	}
}

// 同期

// func_one();
// func_two();
// func_three();

// 非同期

func_one(function(){
	func_two(function(){
		func_three();
	});
});
