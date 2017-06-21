var express = require('express');
var router = express.Router();

// function findFactorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
// }

router.post('/', function (req, res) {

  var factorial = findFactorial(req.query.login);
  // factorial = 23;

  res.render('form-res', req.body);

  res.send('<p> Факториал числа - ' + factorial + '.</p>');

});
//

// function (n) {
//   return (n != 1) ? n * factorial(n - 1) : 1;
// }

// router.post('/', function (req, res) {
//   res.render('form-res', req.body);
// })

module.exports = router;
