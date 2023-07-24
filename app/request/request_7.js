var request = require('request');

const url = 'https://www.google.co.kr';

request(url).then(res => console.log(res));
