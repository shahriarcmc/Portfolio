var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
// /* GET about page. */
// router.get('/about', function(req, res, next) {
//   res.render('index', { title: 'About me' });
// });
// /* GET project page. */
// router.get('/projects', function(req, res, next) {
//   res.render('index', { title: 'Project' });
// });
// /* GET services page. */
// router.get('/services', function(req, res, next) {
//   res.render('index', { title: 'Services' });
// });
// /* GET Contact page. */
// router.get('/contact', function(req, res, next) {
//   res.render('index', { title: 'Contact Me' });
// });

module.exports = router;
