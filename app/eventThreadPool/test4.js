/*
setTimeout 을 사용하면 setImmediate 를 delay 를 0으로 세팅했다 하더라도 사용한것보다 훨신 느리다.
메인 모듈이 실행되고나서 이벤트 루프가 Timer phase에 진입할 때 여러분의 타이머를 찾을 수도 있고 못 찾을 수도 있기 때문이다.
왜냐면 타이머는 시스템의 시간과 사용자가 제공한 시간을 사용하여 등록되기 때문이다. setTimeout이 호출된 순간, 타이머는 메모리에 이 타이머를 저장하게되는데,
그 순간 컴퓨터의 성능이나 Node.js가 아닌 외부 작업 때문에 약간의 딜레이가 발생할 수 있기 때문이다.
*/
var i = 0;
var start = new Date();
function foo() {
  console.log(`### i: ${i}`);

  i++;
  if (i < 10) {
    setTimeout(foo, 100);
  } else {
    var end = new Date();
    console.log('Execution time: ', end - start);
  }
}
foo();
