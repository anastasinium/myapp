var express = require('express');
var router = express.Router();


// function findFactorial(n) {
//     return n ? n * findFactorial(n - 1) : 1;
// }

router.post('/', function (req, res) {

    // req.query.factorial = findFactorial(req.query.login);
    var number = req.query.login;
    function findFactorial(n) {
        return n ? n * findFactorial(n - 1) : 1;
    }

    var result = findFactorial(req.param('login'));
    req.params.factorial = result;
    // req.query.factorial = findFactorial(req.query.login);

    // res.render('form-res', {'factorial' : result});
    res.send('<p>hello ' + result + '</p>');


});
//

// function (n) {
//   return (n != 1) ? n * factorial(n - 1) : 1;
// }

// router.post('/', function (req, res) {
//   res.render('form-res', req.body);
// })

module.exports = router;
