var fs = require('fs');
var https = require('https');
var request = require('request');

request("https://s.pstatic.net/static/newsstand/2020/logo/light/0604/308.png", function(err, res, body) {
  if (err) console.log(err);
  console.log(body);
});
