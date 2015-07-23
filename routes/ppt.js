var express = require('express');
var router = express.Router();

router.get('/:num', function(req, res) {
  var num = req.params.num;
  res.render('ppt/' + num, { num: num });
});

module.exports = router;
