Error.stackTraceLimit = 20;

function fun1() {
  fun2();
}

function fun2() {
  fun3();
}

function fun3() {
  fun4();
}

function fun4() {
  console.log(new Error().stack);
}

fun1();
