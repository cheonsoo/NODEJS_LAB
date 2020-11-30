const math = require('mathjs');
const VALIDATOR = require('./validator');
const CONST = require('./const');

const parse = lines => {
  let parsed = {
    variables: {},
    equations: {}
  };

  lines.forEach(line => {
    // variables
    if (line.indexOf('=') > -1) {
      let variable = {};
      const s = line.split('=');
      variable = {
        type: 'variable',
        name: s[0].trim(),
        value: s[1].trim()
      };
      parsed.variables[variable.name] = variable;
    } else {
      // equations
      parsed.equations[line] = {
        type: 'equation',
        name: line,
        converted: '',
        value: ''
      };
    }
  });

  // Calculate value with variables
  Object.keys(parsed.variables).forEach(key => {
    const variable = parsed.variables[key];
    if (!VALIDATOR.isNumber(variable.value)) {
      variable.original = variable.value;
      variable.value = getValueFromVars(parsed.variables, variable.value);
    }
  });

  return parsed;
};

const getValueFromVars = (variables, line) => {
  const equation = getEquation(variables, line);
  return math.evaluate(equation);
};

const getEquation = (variables, line) => {
  const regex = new RegExp(CONST.REG_EXP);
  let result = line.split(regex);
  result = result.map(item => item.trim()).filter(item => item !== '');

  result = result.map(item => {
    if (variables[item]) return variables[item].value;
    return item;
  });

  return result.join(' ');
};

module.exports = {
  parse,
  getEquation
};
