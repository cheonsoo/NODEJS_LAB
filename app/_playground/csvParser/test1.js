const fs = require('fs');


const employeeList = fs.readFileSync(`${__dirname}/employeeListOriginal.csv`, { encoding: 'utf8' }).split('\n');
// console.log(employeeList);

let content = 'id,emailToForward,email\n';

for (let i=1; len=employeeList.length,i<len; i++) {
  const item = employeeList[i];
  const employee = item.split(',');
  const id = employee[0];
  const name = employee[1];
  const email = employee[2];
  const tmp = email.split('@');
  const emailToForward = `${tmp[0]}@lwportal.${tmp[1]}`;

  if (email && id.indexOf('C') < 0 && id.indexOf('D') < 0) {
    content += `${id},${emailToForward},${email}\n`
  }
}

fs.writeFileSync(`${__dirname}/employeeList.csv`, content);
