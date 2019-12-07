let date = '11월 08 06:09:46 오후';

console.log(date);

debugger;
const y = new Date().getFullYear();
const m = date.substr(0, 2);
const d = date.substr(4, 2);
const hh = date.substr(7, 2);
const mm = date.substr(10, 2);
const dd = date.substr(13, 2);
const dateStr = `${y}-${m}-${d}T${hh}:${mm}:${dd}.000Z`;

console.log(y);
// console.log(new Date());
console.log(new Date(dateStr));