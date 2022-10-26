var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var id1 = Math.floor(Math.random()*10);
    var id2 = Math.floor(Math.random()*10);
    var log = Math.log(id1);
    var cosh = Math.cosh(id2);
    var floor = Math.floor(id1);
    res.render('computation', { title: 'Vyshnavi Kattamuri',
    id1: id1,
    id2:id2,
    log: log,
    cosh: cosh,
    floor: floor
 });
});

module.exports = router;
