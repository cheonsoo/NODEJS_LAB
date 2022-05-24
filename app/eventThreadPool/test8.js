/*
output:
bar
foo
foo and bar
Trace
    at Object.<anonymous> (/Users/cheonsoo.park/Workspace/nodejs/NODEJS_LAB/app/eventThreadPool/test8.js:11:9)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47
*/
const foo = () => {
  bar();
  console.log('foo');
};

const bar = () => {
  console.log('bar');
};

foo();

console.log('foo and bar');

console.trace();
