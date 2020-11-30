let line = 'var1  var2 =  3\nvar3 = 4';

let regex = new RegExp('=', '');
let result = line.split(regex);
let result2 = result.map(item => item.trim());
// console.log(result2);

let formulars = {
  'var1  var2': {
    type: 'variable',
    variable: 'var1  var2',
    value: 3
  },
  'var3': {
    type: 'variable',
    variable: 'var3',
    value: 4
  },
  'var1  var2 + var3': {
    type: 'result'
  }
};
let o = {};
o.formular = result2[0];
o.value = result2[1];
console.log(JSON.stringify(o));

// const res = eval(`${formulars['var1  var2'].value} + ${formulars['var3'].value}`);
// console.log(res);

Object.keys(formulars).forEach(key => {
  if (formulars[key].type === 'variable') {
    console.log(`${formulars[key].variable} = ${formulars[key].value}`);
  }

  if (formulars[key].type === 'result') {
    console.log(key);
    regex = new RegExp('\\+', '');
    let splitted = key.split(regex);
    let vars = splitted.map(item => item.trim());
    console.log(vars);
    console.log(`${key} = `);
    console.log(eval(`${formulars[vars[0]].value} + ${formulars[vars[1]].value}`));
  }
});
