const fs = require('fs');
var express = require('express');
var router = express.Router();

router.get('/cart', function(req, res, next) {
  var userId = "testUser"
  var result = []

  try {
    var rawData = fs.readFileSync('cartitems.json');
    productsInCart = JSON.parse(rawData);
  } catch (err) {
    res.json({ message: 'Error when retrieving from database' })
    return;
  }

  result = productsInCart.filter(item => item.userId == userId);
  res.json(result)
});

router.get('/cart/clear', function(req, res, next) {
  var userId = "testUser"
  var result = []

  try {
    var rawData = fs.readFileSync('cartitems.json');
    productsInCart = JSON.parse(rawData);
  } catch (err) {
    res.json({ message: 'Error when retrieving from database' })
    return;
  }

  result = productsInCart.filter(item => item.userId != userId);
  let dataToSave = JSON.stringify(result);

  fs.writeFileSync('cartitems.json', dataToSave);

  res.json({ message: 'Success' })
});

router.post('',function(req,res,next) {
  
})

module.exports = router;