var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  var result = [];
  var userId = "testUser";
    try {
      var productData = fs.readFileSync('cartitems.json');
      productsCart = JSON.parse(productData);

    } catch (err) {
      res.json({ message: 'inga items' })
      return;
    }
    result = productsCart.filter(item => item.x == userId);

  if(req.session.userid) {
    res.render('cart', { result: result });
  }else {
    res.redirect("login")
  }
});

router.post('/', function(req,res,next) {

  var product = req.body;
  var productsCart = null;
  product.userId = "testUser"
  
  try {
    var Data = fs.readFileSync('cartitems.json');
    productsCart = JSON.parse(Data);

  } catch (err) {
      console.log('du har inga items')
      return;
  }


  productsCart.push(product);
  let saveProducts = JSON.Stringify(productsCart);

  fs.WriteFileSync('cartitems.json',saveProducts);

  
})

module.exports = router;
