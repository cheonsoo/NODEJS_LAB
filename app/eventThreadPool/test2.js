/*
그러나 만약 여러분이 이 코드를 I/O 사이클의 내부로 옮긴다면, 반드시 setTimeout보다 setImmediate가 먼저 실행되는 것을 보장할 수 있게된다.

역주: 위 스니펫은 다음과 같은 순서로 실행된다.
1. fs.readFile을 만나면 이벤트 루프는 libUV에게 해당 작업을 던짐.
2. 파일 읽기는 OS 커널에서 비동기 API를 제공하지 않기 때문에 libUV는 별도의 스레드에 해당 작업을 던짐
3. 작업이 완료되면 이벤트 루프는 Pending i/o callback phase의 pending_queue에 작업의 콜백을 등록
4. 이벤트 루프가 Pending i/o callback phase를 지날 때 해당 콜백을 실행
5. setTimeout이 Timer phase의 큐에 등록됨. 해당 콜백은 다음 Timer phase 때 실행될 것이다.
6. setImmediate의 콜백이 Check phase의 check_queue에 등록됨.
7. Poll phase에서는 딱히 할 일이 없지만, Check phase의 큐에 작업이 있으므로 바로 Check phase로 이동
8. setImmediate 콘솔 출력. Timer phase에는 타이머가 등록되어 있으므로 다시 이벤트 루프가 시작된다.
9. Timer phase에서 타이머를 검사, 딜레이가 0이므로 setTimeout의 콜백을 바로 실행한다.
10. setTimeout 콘솔 출력

즉, 이런 과정을 거치기 때문에 setImmediate의 콜백이 반드시 setTimeout보다 먼저 실행되는 것을 보장할 수 있는 것이다.
 */
const fs = require('fs');

fs.readFile('text.txt', () => {
  setTimeout(() => {
    console.log('setTimeout');
  }, 0);
  setImmediate(() => {
    console.log('setImmediate');
  });
});
