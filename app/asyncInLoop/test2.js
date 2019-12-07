const request = require('request');

function delay(idx) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`[${idx}] delayed ...`);
            resolve(idx);
        }, 3000);
    });
    return promise;
}

function getData(idx) {
    const promise = new Promise((resolve, reject) => {
        console.log(`# ${idx}`);
        const url = 'http://localhost:9200/kpi/jira/1';
        request(url, function(err, body, data) {
            // console.log(JSON.parse(data).name);
            resolve(JSON.parse(data));
        });
    });
    return promise;
}

async function run() {
    console.log('start');
    // const val = await delay();
    // for (const i of [1,2,3,4,5]) {
    for (let i=0; i<10; i++) {
        const res = await getData(i);

        await delay(i);

        console.log(`waited : ${res._index}`);
    }
    console.log('end');
}

run();