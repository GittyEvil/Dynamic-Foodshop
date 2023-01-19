var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('chooseaccount', { title: 'Express' });
});


router.post('/', function(req, res, next){
  var jsonData = null

  try {
      var data = fs.readFileSync("C:\Users\adrian.stude\Documents\Prog2\Dynamic-Foodshop\\user.json", "utf8")
      jsonData = JSON.parse(data);
      console.log(jsonData[0])
  } catch (error) {

  }


  var username = (req.body.username);
  var password = (req.body.password);

  

});

module.exports = router;


