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
        console.log('error')
        return;
    }

    
    for(var i=0; i< users; i++) {
        console.log('inne i loop')
        if(req.session.username == users[i].username && users[i].password == req.session.password
           && users[i].gmail == req.session.gmail){
            console.log('lyckades')
          var oldmail = users[i].gmail;
          var oldusername = users[i].gmail;

          //req.body.username
          //req.body.username


          //behöver fixa något som byter ut den gamla infon och ger den nya
          var NewUserInformation = {
            //username:req.body.username,
            password:req.body.password,
            email:req.body.email
        }
        
          users[i].push(NewUserInformation)


          let uppdateraInfo = JSON.stringify(users[i])

          fs.writeFileSync('user.json', uppdateraInfo)
          res.render('profile',{message: "profil bytt"})
      }
    }
    
});

module.exports = router;
