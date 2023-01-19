const fs = require('fs');
var express = require('express');
const { getSystemErrorMap } = require('util');
const { json } = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});


router.post('/', function(req, res, next){
  var jsonData = null

  try {
      var data = fs.readFileSync("C:\\Users\\adrian.stude\\Documents\\Prog2\\Dynamic-Foodshop\\user.json", "utf8")
      jsonData = JSON.parse(data);
      console.log(jsonData[0])
  } catch (error) {
    console.log(error)
  }
  
  var username = (req.body.username)
  var password = (req.body.password)

  for(i= 0; i < jsonData.length; i++) {
    if(username == jsonData[i].username && jsonData[i].password == password)
      res.redirect('/')
    
  }
  

});

module.exports = router;


