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

    /*
    for(var i =0; i< users; i++) {
      if(user.id = users.id[user]) {
        ExistingUser = user;
     }
    }
    */

    for(const user of users ) {
        if(user.id = "000001") {
          ExistingUser = user;
          Console.log('lyckades hitta användare')
        }
    }


    if(ExistingUser != req.body.old_password) {
        console.log('fel i lösen')
        res.render("profile", Object.assign(ExistingUser, {errorMsg:"ditt lösenord stämmer inte"}))
    }else {
        var NewUserInformation = {
            username:req.body.username,
            password:req.body.password,
            //email:req.body.email
        }
        console.log('lyckades med lösen')
        addUser("000001",NewUserInformation, users)

        save(users)
        if(!uppdateradInfo) {
            res.render('profile', Object.assign(NewUserInformation, {errorMsg:"profil uppdaterad"}))
            console.log('lyckas')
        }
        

    }
});

//funktionen hanterar tillägg av användare?
function addUser(id, userToAdd, usersList) {
    var objIndex = usersList.findIndex((obj => obj.id == id));
  
    usersList[objIndex] = userToAdd
    usersList[objIndex].id = id;
    
    console.log(usersList)
  }
  //funktionen hanterar sparandet av den nya användarens listinformation
  function save(usersList) {
    let dataToSave = JSON.stringify(usersList);
      fs.writeFileSync('user.json', dataToSave);
  }

module.exports = router;
