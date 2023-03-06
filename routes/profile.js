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
    try {
        var userData = fs.readFileSync('user.json');
        users = JSON.parse(userData);
      } catch (err) {
        res.send('hittade inga användare');
        return;
    }


    for(const user of users ) {
        if(user.id = "000001") {
           ExistingUser = user;
        }
    }


    if(ExistingUser != req.body.password) {
        res.render("profile", Object.assign(ExistingUser, {errorMsg:"ditt lösenord stämmer inte"}))
    }else {
        var NewUserInformation = {
            username:req.body.username,
            password:req.body.username,
            //email:req.body.email
        }

        addUser("000001",NewUserInformation, users)

        save(users)

        res.render('profile', Object.assign(NewUserInformation, {errorMsg:"profil uppdaterad"}))

    }
});


function addUser(id, userToAdd, usersList) {
    var objIndex = usersList.findIndex((obj => obj.id == id));
  
    usersList[objIndex] = userToAdd
    usersList[objIndex].id = id;
    
    console.log(usersList)
  }
  
  function save(usersList) {
    let dataToSave = JSON.stringify(usersList);
      fs.writeFileSync('users.json', dataToSave);
  }

module.exports = router;
