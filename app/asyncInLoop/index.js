const request = require('request-promise');

const util = require('../../utils/util');

async function getData() {
  const url = 'http://google.co.kr';
  let res = await request(url);
  console.log(res);
  return res;
}

async function run() {
  for (let i=0; i<3; i++) {
    await getData();

    await util.delay();
  }
  console.log('DONE');
}

run();
