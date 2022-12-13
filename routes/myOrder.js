var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/myOrder', function(req, res, next) {
  res.render('myOrder', { title: 'Express' });
});

module.exports = router;
