const content = '/lightpack/planner/calendar/create.do - cannot retry due to server authentication, in streaming mode';

const regexp = new RegExp('(?!\[[a-zA-Z]*\]\\s\:\\s).*\n', 'gi');
const res = content.match(regexp);

console.log(res);
// console.log(res[0]);
console.log('ver 1.1');