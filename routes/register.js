var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express' });
});


router.post('/', function(req, res, next){
  var newUsers = null

  try {
      var data = fs.readFileSync('user.json')
      newUsers = JSON.parse(data)
  } catch (err) {
      console.log('error')
      return;
  }


  var userInput = {
    username: (req.body.username),
    password: (req.body.password)
  }

  newUsers.push(userInput)

  let sendNewData = JSON.stringify(newUsers)

  fs.writeFileSync('user.json', sendNewData)
  res.redirect('/login')
  return;
});

module.exports = router;


