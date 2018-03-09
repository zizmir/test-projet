var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  	let new_user =
	  db.user.create({
	    username: "m'bark",
	    email: "mbark.bouznir@gmail.com",
	  }).then(() => {
	    res.redirect('/');
	 });
	res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ hi : "Hello world !" }));
});

module.exports = router;
