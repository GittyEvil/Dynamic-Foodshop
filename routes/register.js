var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

var data = null

try {
    var data = fs.readFileSync("C:\Users\adrian.stude\Documents\Prog2\Dynamic-Foodshop\\user.json")
    data = JSON.parse(data);
    console.log(jsonData[0])
} catch (error) {

}

var username = (req.body.username);
var password = (req.body.password);



module.exports = router;
