var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    page: 'Home',
    menuId: 'home'
  });
});

/* GET About Us page. */
router.get('/about', function (req, res, next) {
  res.render('index', {
    page: 'About Us',
    menuId: 'about'
  });
});

/* GET home page. */
router.get('/contact', function (req, res, next) {
  res.render('index', {
    page: 'Contact Us',
    menuId: 'contact'
  });
});

module.exports = router;