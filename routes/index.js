var express = require('express');
var router = express.Router();
var db = require("../database/init")
/* GET home page. */
router.get('/', function(req, res, next) {

  	let new_user =
	  db.user.create({
	  	firstname: "m'bark",
    	lastname: "Bouznir",
	    email: "mbark.bouznir@gmail.com"

	  }).then(() => {
	    res.json({ hi : "Hello world !" });
	})
    
});

module.exports = router;
