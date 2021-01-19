var i = 0;
var start = new Date();
function foo() {
  console.log(`### i: ${i}`);

  i++;
  if (i < 20) {
    setImmediate(foo);
  } else {
    var end = new Date();
    console.log('Execution time: ', end - start);
  }
}
foo();
