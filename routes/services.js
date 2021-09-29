var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('services', { 
    title: 'Services',
    userName: 'Shahriar Moinuddin' });
});

module.exports = router;
