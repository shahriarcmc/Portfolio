var express = require('express');
var router = express.Router();
let controlerIndex = require('../controller/index');

/* GET home page. */
router.get('/', controlerIndex.home);
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
/* GET home page. */

module.exports = router;
