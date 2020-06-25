var request = require('request');
var fs = require('fs');

const url = 'https://s.pstatic.net/static/newsstand/2020/logo/light/0604/308.png';
const filePath = `/Users/mansoo/Workspace/mansoo/NODEJS_LAB/app/download/test_${new Date().getTime()}.png`;

request.head(url, function(err, res, body) {
  console.log('content-type:', res.headers['content-type']);
  console.log('content-length:', res.headers['content-length']);

  request(url).pipe(fs.createWriteStream(filePath)).on('close', function() {
    console.log("DONE");
  });
});