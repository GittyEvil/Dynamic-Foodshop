var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    try {
      var productData = fs.readFileSync('cartitems.json');
      productsCart = JSON.parse(productData);

    } catch (err) {
        console.log('du har inga items')
        return;
    }

  if(req.session.userid) {
    res.render('cart');
  }else {
    res.redirect("login")
  }
});

router.post('/', function(req,res,next) {
  var products = req.body;
  var productsCart = null;
  var productData = fs.readFileSync('cartitems.json');
  productsCart = JSON.parse(productData);
  let saveProducts = JSON.Stringify(productsCart);

  productsCart.push(products);

  fs.WriteFileSync('cartitems.json',saveProducts);


})

module.exports = router;
