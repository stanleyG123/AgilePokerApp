var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Welcome to Agile Estimation App' });
});

/* Client page. */
router.get('/client', function(req, res) {
  console.log('in client route')
  res.render('client', { title: 'client page' });
});

/* Host page */
router.get('/host', function(req, res) {
  res.render('host', { title: 'host page' });
});



/* POST forms handler */
router.post('/startSession', function(req, res) {  
 console.log("go diego go" + req.body.sessionName);  
 res.render('host' , {Room:'Welcome to Room ' + req.body.sessionName});
});




module.exports = router;
