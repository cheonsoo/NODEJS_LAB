const request = require('request');

function delay(idx) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`[${idx}] delayed ...`);
            resolve(idx);
        }, 1000);
    });
    return promise;
}

function getData(idx) {
    const promise = new Promise((resolve, reject) => {
        console.log(`# ${idx}`);
        const url = 'http://google.co.kr';
        request(url, function(err, body, data) {
            resolve(data);
        });
    });
    return promise;
}

async function run() {
    console.log('start');
    // const val = await delay();
    // for (const i of [1,2,3,4,5]) {
    for (let i=0; i<3; i++) {
        const res = await getData(i);

        await delay(i);

        // console.log(`waited : ${res}`);
    }
    console.log('end');
}

run();