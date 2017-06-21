var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
    var number = req.param('num');

    function findFactorial(n) {
        return n ? n * findFactorial(n - 1) : 1;
    }

    var result = findFactorial(number);

    res.render('form-res', {
        num: number,
        factorial : result
    });
});

module.exports = router;
