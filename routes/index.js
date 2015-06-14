var express = require('express');
var router = express.Router();

var User = require("../models/users");

/* GET home page. */
router.get('/', function(req, res, next) {
	 User.find({}, function(err, data){
	 	if(err) throw err;
		res.render('index', { title: 'Express', data: data });
	});
});

router.post("/", function(req, res, next){
	var name = req.body.firstname;
	var textt = req.body.text;

	User.create( { firstName: name, text: textt }, function(req, res, next){
	});

	res.redirect("/");
});


module.exports = router;
