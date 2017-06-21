var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {

  // function findFactorial(req) {
  // var factorial = (req != 1) ? req * factorial(req - 1) : 1;
  //   return factorial;
  // }

res.render('form-res',
    function findFactorial(req) {
      var factorial = (req != 1) ? req * factorial(req - 1) : 1;
      return factorial;
});
});


// function (n) {
//   return (n != 1) ? n * factorial(n - 1) : 1;
// }

// router.post('/', function (req, res) {
//   res.render('form-res', req.body);
// })

module.exports = router;
