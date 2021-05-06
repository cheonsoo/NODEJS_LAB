// 1011 = 2^3 + 2^1 + 2^0
var val = 11; //"1011";
var conv = val.toString(2);
console.log(conv);

var val2 = Number.parseInt(conv, 2);
console.log(val2);

var test1 = 10; // 1010
var test2 = 11; // 1011

var val3 = test1 & test2;

console.log("===============");
console.log(test1.toString(2));
console.log(test2.toString(2));
console.log(val3.toString(2));