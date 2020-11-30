const math = require('mathjs');

/**
 * 연산자: Operator
 *
 * Operators: +, =, -, /, *, %
 *
 * = 은 한번만 쓸수있도록 Validation?
 */
const arr = [
  ['var1  var2', '=', '3'],
  ['var3', '=', '5'],
  ['var1  var2', '+', 'var3']
];

const variables = {
  var1_BLANK__BLANK_var2: {
    value: 3,
    operator: '='
  },
  var3: {
    value: 5,
    operator: '='
  },
  var4: {
    value: 7
  },
  var5: {
    value: 9
  }
};

const formulars = [['var1_BLANK__BLANK_var2', '+', 'var3', '-', 'var4', '/', 'var5']];

formulars.forEach(formular => {
  const equationOriginal = formular.join(' ');
  const equationInStr = formular
    .map(item => {
      if (variables[item]) {
        return variables[item].value;
      } else {
        return item;
      }
    })
    .join('');

  console.log(`${equationOriginal} = ${math.evaluate(equationInStr)}`);
});

// const formular = ['var1[BLANK][BLANK]var2', '+', 'var3'];
// console.log(variables[formular[0]].value + variables[formular[2]].value);

// const num1 = 1;
// const num2 = 2;
// console.log(math.evaluate('num1+num2'));
