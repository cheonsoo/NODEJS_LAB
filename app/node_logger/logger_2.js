var fs = require('fs');
var io = require('socket.io')(3000);
var logPath = "/Users/cpark/.pm2/logs/kaola-product-out-0.log";
var options = {stream: fs.createWriteStream(logPath, {flags:'a'}) };
var logger = require('socket.io-logger')(options);
io.use(logger);

// /Users/cpark/.pm2/logs/kaola-product-out-0.log