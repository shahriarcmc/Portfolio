var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('contact', { 
    title: 'Contact',
    userName: 'Shahriar Moinuddin',userName: req.user ? req.user.username : '' });
});

module.exports = router;
