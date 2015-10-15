//GET https://www.bitstamp.net/api/ticker/
var express = require('express')
var request = require('request')
var router = express.Router();

/* GET users listing. */
router.get('/blahblah', function(req, res, next) {

	console.log('in price');
  var url = 'https://www.bitstamp.net/api/ticker/';
  var answer; 
  request({
    url: url,
    json: true
  }, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        body = answer;
    }
  })
  res.send(answer);
});

var tickerTimestamp = 0;
router.get('/ticker', function(req, res, next) {
  pipe(req, res, 'https://www.bitstamp.net/api/ticker/');
});

router.get('/ticker_hour', function(req, res, next) {
  pipe(req, res, 'https://www.bitstamp.net/api/ticker_hour/');
});

router.get('/order_book', function(req, res, next) {
  pipe(req, res, 'https://www.bitstamp.net/api/order_book/');
});

router.get('/transactions', function(req, res, next) {
  pipe(req, res, 'https://www.bitstamp.net/api/transactions/?time=day');
});


function pipe(req, res, url){
  var myRequest = request(url);
  req.pipe(myRequest)
  myRequest.pipe(res);
  return myRequest;
}

module.exports = router;






