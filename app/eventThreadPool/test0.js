function foo(b) {
  console.log('### foo');
  let a = 10;
  return a + b + 11;
}

function bar(x) {
  console.log('### bar');
  let y = 3;
  return foo(x * y);
}

const baz = bar(7); // 42를 baz에 할당
