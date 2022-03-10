var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('you find me!');
});

router.get('/ineedrest', function (req, res, next) {
  res.send('Please leave me alone!');
});

module.exports = router;
