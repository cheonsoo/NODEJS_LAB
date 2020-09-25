const dutil = require('chance-util');

const d = dutil.dateStr();
const d2 = dutil.dateCal(d, -7);
const d3 = dutil.dateFormat(new Date(), 'YYYY-MM-DD HH:MM:DD');
console.log(d);
console.log(d2);
console.log(d3);
