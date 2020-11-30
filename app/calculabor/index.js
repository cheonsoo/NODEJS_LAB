const math = require('mathjs');
const PARSER = require('./parser');
const UTILS = require('./utils');

const lines = `var1_var2 = 1
var3 = 3
var4 = 4
var5 = 5
var1_var2 + var5 - var4 / var3
var3 + var4
비행기 = 100000
숙박비 = 50000
여행경비 = 비행기 + 숙박비
비행기 + 숙박비`;

const formulars = lines.split('\n');

const parsed = PARSER.parse(formulars);

Object.keys(parsed.equations).forEach(key => {
  const converted = PARSER.getEquation(parsed.variables, parsed.equations[key].name);
  parsed.equations[key].converted = converted;
  parsed.equations[key].value = math.evaluate(converted);
});

UTILS.printResult(parsed);
