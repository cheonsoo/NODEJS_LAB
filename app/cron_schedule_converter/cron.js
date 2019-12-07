var cron = require( "cron-converter" );

var cronInstance = new cron();

cronInstance.fromString('10 17 * * *');
 
// Prints: '*/10 9-17 1 * *'
console.log(cronInstance.toString());
 
// Prints:
// [
//   [ 0, 10, 20, 30, 40, 50 ],
//   [ 9, 10, 11, 12, 13, 14, 15, 16, 17 ],
//   [ 1 ],
//   [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
//   [ 0, 1, 2, 3, 4, 5, 6 ]
// ]
console.log(cronInstance.toArray());

console.log( cronInstance.schedule());
