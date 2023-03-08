var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    var users = null;
    try {
        var userData = fs.readFileSync('user.json');
        users = JSON.parse(userData);
      } catch (err) {
        res.send('hittade inga användare');
        return;
    }


  if(req.session.userid) {
    res.render('profile', users);
  }else {
    res.redirect("login")
  }
});


router.post('/',function(req,res,next) {
    var users = null;
    var uppdateradInfo = false;
    try {
        var userData = fs.readFileSync('user.json');
        users = JSON.parse(userData);
      } catch (err) {
        res.send('hittade inga användare');
        return;
    }

    
    for(var i=0; i< users; i++) {
        if(req.session.username == jsonData[i].username && jsonData[i].password == req.session.password
           && jsonData[i].gmail == req.session.gmail){
          var oldmail = jsonData[i].gmail;
          var oldusername = jsonData[i].gmail;
          var NewUserInformation = {
            username:req.body.username,
            password:req.body.password,
            email:req.body.email
        }
        
      }
    }
    
});

module.exports = router;
