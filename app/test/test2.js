const request = require("request");

request("http://devimage.gsshop.com/image/60/00/60000212_L1.jpg")
.then(function(res, rep, err) {
  console.log(res);
});