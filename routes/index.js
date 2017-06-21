var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
  	title: 'Express',
  	course: 'frontend pro',
  	list: [{
  		firstName: 'yura',
  		lastName: 'fedorenko',
  		age: 27
  	}, {
  		firstName: 'nastia',
  		lastName: 'pidoprigora',
  		age: 24
  	}]
   });
});

module.exports = router;
