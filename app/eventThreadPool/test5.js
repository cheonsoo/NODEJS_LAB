/*
시간을 비교하고 편차를 알아내는 작업이 CPU를 집중적으로 사용하는 작업이기 때문에 시간이 더 오래 걸리기 때문이다.
그리고 타이머 스크립트를 등록하는 것 자체도 시간을 소모한다.
위에서 설명했듯이 Timer phase에서는 타이머를 실행할 시간이 되었는지, 콜백을 실행해야 하는지를 검사하기 위해 몇가지 작업을 거쳐야 하는데
이 과정을 매 이터레이션마다 하고 있으니 느려질 수 밖에 없다.
그러나 setImmediate의 경우 이런 과정이 필요없기 때문에 setTimeout보다 실행 속도가 빠른 것이다.
*/
var i = 0;
var start = new Date();
function foo() {
  i++;
  if (i < 1000) {
    setTimeout(foo, 0);
  } else {
    var end = new Date();
    console.log('Execution time: ', end - start);
  }
}
foo();

var i = 0;
var start = new Date();
function foo2() {
  i++;
  if (i < 1000) {
    setTimeout(foo, 0);
  } else {
    var end = new Date();
    console.log('Execution time: ', end - start);
  }
}
foo2();
