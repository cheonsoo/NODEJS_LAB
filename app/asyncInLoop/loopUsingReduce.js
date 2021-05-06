const axios = require('axios');

function delay() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`[${idx}] delayed ...`);
      resolve(true);
    }, 1000);
  });
  return promise;
}

async function getData(_id) {
  const url = `http://localhost:9200/classes/user/${_id}`;
  const res = await axios.get(url);
  return res.data._source;
}

async function loop() {
  await [1, 2, 3].reduce(async (acc, cur, idx) => {
    console.log(`### id: ${cur}`);
    const data = await getData(cur);
    // console.log(data);
    console.log('111');
    const data2 = await getData(cur);
    // console.log(data2);
    console.log('222');
    return 0;
  }, 0);
}

async function run() {
  console.log('start');
  await loop();
  console.log('end');
}

run();
