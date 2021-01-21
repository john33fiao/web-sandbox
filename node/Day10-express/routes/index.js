var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Pug 합시다'
  });
});

// pug 진행

router.get('/pugtest', function (req, res, next) {
  res.render('pugtest', {
    title: 'pugtest'
  });
});

router.get('/language', function (req, res, next) {
  res.render('language', {
    title: 'Language 연습',
    message: "그래도 일단 get 방식은 아니다 그쵸",
    content: "<font color = 'blue'>font</font>"
  });
});


module.exports = router;