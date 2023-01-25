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
      var data = fs.readFileSync('C:\\Users\\adrian.stude\\Documents\\Prog2\\Dynamic-Foodshop\\user.json')
      NewUsers = JSON.parse(data)
  } catch (err) {
      console.log('error')
  }


  var AppendData = {
    username : (req.body.username),
    password : (req.body.password)
  }

  newUsers.push(AppendData)

  var sendNewData = JSON.stringify(newUsers)

  fs.writeFileSync('user.json',sendNewData)
  res.redirect('/login')

});

module.exports = router;


