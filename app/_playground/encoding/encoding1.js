const detect = require('detect-character-encoding');
let iconv = require('iconv-lite');
let fs = require('fs');

let str = fs.readFileSync(__dirname + '/test1.txt');

console.log(str);

console.log(`encoding: ${JSON.stringify(detect(str))}`);

// console.log(iconv.decode(str.toString(), 'euc-kr'));
// console.log(iconv.encode(str, 'euc-kr'));
// console.log(iconv.decode(str, 'utf8'));
// console.log(iconv.encode(str, 'utf8'));
