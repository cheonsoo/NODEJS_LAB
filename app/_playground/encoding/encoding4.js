const detect = require('detect-character-encoding');
const iconv = require('iconv-lite');
const fs = require('fs');
const fileName = 'test6.txt';
let str = fs.readFileSync(__dirname + '/' + fileName);
console.log(str);

console.log(`encoding: ${JSON.stringify(detect(str))}`);

console.log(iconv.decode(str, 'cp949'));
// console.log(iconv.decode(str, 'win1252'));
// console.log(iconv.decode(str, 'utf-8'));
// console.log(iconv.decode(str, 'euc-kr'));
// console.log(iconv.decode(Buffer.concat(str, 'euc-kr')));
// console.log(iconv.encode(str.toString(), 'euc-kr'));
// console.log(iconv.decode(str, 'utf8'));
// console.log(iconv.encode(str, 'utf8'));
