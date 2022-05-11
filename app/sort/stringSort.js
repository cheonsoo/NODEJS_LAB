const keys = [
  "COMMON_GNRL",
  "PREMIUM_GNRL",
  "BC10000000",
  "BC10000000_BC10100000",
  "COMMON_FD",
  "COMMON_HMAP",
];

// keys.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
//   return 0;
// });

// const idxOfPrm = keys.indexOf("PREMIUM_GNRL");

// let newOrder = [];
// if (idxOfPrm > -1) {
//   newOrder = newOrder.concat(keys.splice(idxOfPrm, 1));
// }

// const keysCategory = keys.filter(item => item.indexOf('BC') > -1);
// newOrder = newOrder.concat(keysCategory);

let keysPrm = [];
let keysCategory = [];
let keysTemplate = [];
keys.forEach(item => {
  if (item.indexOf('PREMIUM') > -1) keysPrm.push(item);
  else if (item.indexOf('BC') > -1) keysCategory.push(item);
  else if (item.indexOf('COMMON') > -1) keysTemplate.push(item);
});

let newOrder = keysPrm.concat(keysCategory, keysTemplate);
console.log(newOrder.join(', '));
