var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var Model = require('../model/model');



/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('admin/index', { title: 'Express' });
  // res.send('respond with a resource');
});


/* Get all State */
router.get('/getstates', function(req, res, next) {
	

	var States = mongoose.model('States', StatesSchema);
	States.find(function(err, states) {
	  if (err) return console.error(err);
	  // console.dir(movies);
	  res.send(states);
	});
	// console.log(states);

   // res.send(states);
});


module.exports = router;
