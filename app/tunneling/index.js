var fs = require("fs");
var mongoose = require('mongoose');
var tunnel = require('tunnel-ssh');

//===== db connection =====

var config = {
    username:'my.username',
    host:'my.ip.address',
    agent : process.env.SSH_AUTH_SOCK,
    privateKey:require('fs').readFileSync('/Users/myusername/.ssh/id_rsa'),
    port:22,
    dstHost:'mongodb://localhost:27000/mydbname',
    dstPort:27000,
    localHost:'127.0.0.1',
    password:'mypassword',
    localPort: 27000
};

var server = tunnel(config, function (error, server) {
    if(error){
        console.log("SSH connection error: " + error);
    }
    mongoose.connect('mongodb://localhost:27000/mydbname');

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'DB connection error:'));
    db.once('open', function() {
        // we're connected!
        console.log("DB connection successful");
        // console.log(server);
    });
});