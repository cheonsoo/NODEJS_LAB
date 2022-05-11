const foo = () => {
  bar();
  console.log('foo');
};
const bar = () => {
  console.log('bar');
};
foo();
console.log('foo and bar');
