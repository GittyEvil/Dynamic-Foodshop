const fs = require('fs');
var express = require('express');
const { getSystemErrorMap } = require('util');
const { json } = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.session.userid){
      res.redirect("/");
  } else {
      res.render("login");
  }    
});


router.post('/', function(req, res, next){
  var jsonData = null

  try {
      var data = fs.readFileSync("C:\\Users\\adrian.stude\\Documents\\Prog2\\Dynamic-Foodshop\\user.json","utf-8")
      jsonData = JSON.parse(data);
  } catch (error) {
    console.log('error')
    return;
  }

  var username = (req.body.username)
  var password = (req.body.password)

  for(i= 0; i < jsonData.length; i++) {
    if(username == jsonData[i].username && jsonData[i].password == password){
      
        req.session.userid = username;   
        res.redirect("/")
        return;
    }
    
  }
  res.render("/login");
});

module.exports = router;


