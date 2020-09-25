const detect = require('detect-character-encoding');
let iconv = require('iconv-lite');
let fs = require('fs');
// const fileName = "재고점검2.sql";
const fileName = 'test4.txt';
let str = fs.readFileSync(__dirname + '/' + fileName);

// console.log(str);

console.log(`encoding: ${JSON.stringify(detect(str))}`);

// console.log(iconv.decode(str.toString(), 'euc-kr'));
// console.log(iconv.encode(str, 'euc-kr'));
// console.log(iconv.decode(str, 'utf8'));
// console.log(iconv.encode(str, 'utf8'));
