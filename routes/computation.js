var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var x = Math.floor(Math.random()*10);
    var y = Math.floor(Math.random()*10);
    var log = Math.log(x);
    var cosh = Math.cosh(y);
    var floor = Math.floor(x);
    res.render('computation', { title: 'Vyshnavi Kattamuri',
    x: x,
    y: y,
    log: log,
    cosh: cosh,
    floor: floor
 });
});

module.exports = router;
