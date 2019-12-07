const request = require('request-promise');

const arr = [
  'http://google.co.kr',
  'http://google.co.kr',
  'http://google.co.kr',
  'http://google123.co.kr',
  'http://google.co.kr',
  'http://google1234.co.kr',
  'http://google.co.kr',
  'http://google.co.kr',
  'http://google.co.kr',
  'http://google.co.kr'
];

let urlList = [];
let erroredList = [];
let idx = 0;
let cntRetry = 0;
const cntRetryMax = 5;

async function getData(_url) {
  console.log(`${idx}, ${_url}`);
  let res;
  try {
    res = await request(_url);
    // arr.splice(idx, 1);
  } catch (err) {
    // console.log(err.message);
    console.log(`### Failed: ${_url}`);
    erroredList.push(_url);
  }
  idx++;
  return res;
}

async function run() {
  if (cntRetry === cntRetryMax) {
    console.log('DONE Crawling');
    return;
  }

  idx = 0;
  urlList = erroredList.length > 0 ? JSON.parse(JSON.stringify(erroredList)) : JSON.parse(JSON.stringify(arr));
  erroredList = [];
  
  console.log(`########################################`);
  console.log(`### Start Crawling ${urlList.length} items`);
  console.log(`########################################`);

  for (const url of urlList) {
    await getData(url);
  }

  cntRetry++;

  run();
}

run();
