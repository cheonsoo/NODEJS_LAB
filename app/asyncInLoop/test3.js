const util = require('../../util/util');

const numToRunAtOnce = 5;
const numToRun = 3;
let cnt = 0;

async function run() {
  if (cnt > numToRun) {
    console.log('DONE');
    return;
  }

  console.log('start ...');

  const fnArr = [];
  for (let i=0; i<numToRunAtOnce; i++  ) {
    fnArr.push(util.delay());
  }

  await Promise.all(fnArr);

  cnt++;
  console.log('restarting ...');
  console.log('==================');

  run();
}

run();