var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/display',function(req,res)
{
	var a=req.body.value1;
   res.render('d_view',{title:a});
});


module.exports = router;
