const fs = require('fs');

const start = Date.now();

fs.readFile('../text.txt', function () {
  console.log('2:', Date.now() - start);
});
