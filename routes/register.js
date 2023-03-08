var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express' });
});


router.post('/', function(req, res, next){
  var newUsers = null
  //läser user json filen med användare
  try {
      var data = fs.readFileSync('user.json')
      newUsers = JSON.parse(data)
  } catch (err) {
      console.log('error')
      return;
  }

  //tar input från användare när de skriver in
  var userInput = {
    username: (req.body.username),
    password: (req.body.password),
    gmail: (req.body.gmail)
  }
  //skickar in i listan(där filen lästes)
  newUsers.push(userInput)
  //gör om det till string som sedan pushas in i json fil, skickas till login 
  let sendNewData = JSON.stringify(newUsers)

  fs.writeFileSync('user.json', sendNewData)
  res.redirect('/login')
  return;
});

module.exports = router;


