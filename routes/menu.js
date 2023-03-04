var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {

  var products = null;

  try {
    var rawData = fs.readFileSync('products.json');
    products = JSON.parse(rawData);
  } catch (err) {
    console.log(err)
    res.send('kan inte hitta produkter');
    return;
  }


  if(req.session.userid) {
    res.render('menu', {products: products});
  }else {
    res.redirect("login")
  }
});

router.post('/', function(req,res,next ) {

}) 

module.exports = router;
