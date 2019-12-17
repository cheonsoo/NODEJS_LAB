let today_UTC = new Date();
// var today_local = new Date(today_UTC.getTime() - (today_UTC.getTimezoneOffset() * 60000));
let today_local = new Date(today_UTC.getTime() + (9*1000*60*60));

// console.log(today_UTC.getTimezoneOffset());
console.log(today_UTC);
console.log(today_local);