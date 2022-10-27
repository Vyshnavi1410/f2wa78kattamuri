var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  
  if (Object.keys(req.query).length === 0) {
    var x=Math.random();
    res.render('computation', { value: `math.log2() applied to ${x} is ${Math.log2(x)}`,
    value1: `math.cosh() applied to ${x} is ${Math.cosh(x)}` ,
    value2: `math.floor() applied to ${x} is ${Math.floor(x)}` });
  }
  else{

    for (let result in req.query) {

      console.log(result)

      res.render('computation', { value: `math.log2() applied to ${req.query[result]} is ${Math.log2(req.query[result])}`,
      value1: `math.cosh() applied to ${req.query[result]} is ${Math.cosh(req.query[result])}` ,
      value2: `math.floor() applied to ${req.query[result]} is ${Math.floor(req.query[result])}` })

    }
  }


});


module.exports = router;