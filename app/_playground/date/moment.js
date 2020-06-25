const moment = require('moment');

console.log(moment().format());
console.log(moment().format('YYYY-MM-DD').toString());
console.log(moment().add(-5, "days").format('YYYYMMDDHHMMSS'));

let date = new Date();
date.setDate(date.getDate() - 7);
console.log(moment().format('YYYY-MM-DDTHH:MM:SS.SSS').toString());
console.log(date);