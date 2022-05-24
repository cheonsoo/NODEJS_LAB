/*
output:
foo
foo
foo
foo
foo
foo
foo
foo
foo
foo
foo
foo
foo
foo
foo
foo
foo
foo
foo
foo
setTimeout
setTimeout
setTimeout
setTimeout
setTimeout
setTimeout
setTimeout
setTimeout
setTimeout
setTimeout
setTimeout
setTimeout
setTimeout
setTimeout
setTimeout
setTimeout
setTimeout
setTimeout
setTimeout
setTimeout
*/

var i = 0;

function foo() {
  i++;
  if (i > 20) {
    return;
  }

  console.log('foo');

  setTimeout(() => {
    console.log('setTimeout');
  }, 0);

  process.nextTick(foo);
}

setTimeout(foo, 2);
