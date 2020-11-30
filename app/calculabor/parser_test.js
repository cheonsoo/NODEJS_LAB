const DATA = require('./data2.json');

const formular = 'var1_BLANK__BLANK_var2 + var3 - var4 / var5 + ( 4 % 2 )';

const regex = new RegExp('(\\+|\\-|\\/|\\*|\\%|\\^|\\=|\\(|\\))');
let result = formular.split(regex);
result = result.map(item => item.trim()).filter(item => item !== '');
console.log(result);

result = result.map(item => {
  if (DATA[item]) return DATA[item].value;
  return item;
});

console.log(result);

console.log(result.join(' '));
