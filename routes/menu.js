var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var products = null;
  let result = [];

  try {
    //var productData = fs.readFileSync('products.json');
    //products = JSON.parse(productData);
  } catch (err) {
    console.log(err)
    //res.send('Error when retrieving from database');
    return;
  }
  //result = products.filter(item => item.userId == userId);

  if(req.session.userid) {
    res.render('menu', {products: products});
  }else {
    res.redirect("login")
  }
});

router.post('/', function(req,res,next ) {

}) 

module.exports = router;
