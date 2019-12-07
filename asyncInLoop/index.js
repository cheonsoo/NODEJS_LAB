const request = require('request-promise');

const arr = [
  'http://google.co.kr',
  'http://google.co.kr',
  'http://google.co.kr'
];

let urlList = [];
let idx = 0;

async function getData(_url) {
  let res = await request(_url);
  arr.splice(idx, 1);
  console.log('DONE');
  return res;
}

async function run() {

  if (arr.length === 0) {
    console.log('DONE Crawling');
    return;
  }

  idx = 0;
  urlList = arr;

  for (const url of urlList) {
    await getData(url);
    idx++;
  }

  run();
}

run();
