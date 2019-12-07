function delay(idx) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log(`[${idx}] delayed ...`);
            resolve(idx);
        }, 3000);
    });
    return promise;
}

async function run() {
    console.log('start');
    // const val = await delay();
    for (const i of [1,2,3]) {
    // for (let i=0; i<3; i++) {
        const idx = await delay(i);
        console.log(`waited : ${idx}`);
    }
    console.log('end');
}

run();