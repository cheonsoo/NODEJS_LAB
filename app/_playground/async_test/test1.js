const call1 = () => {
  const promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log("call1");
      resolve("call1");
    }, 1000)
  }).then(res => res = `${res}_updated`);
  return promise;
}

const call2 = () => {
  const promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log("call2");
      resolve("call2");
    }, 1000)
  }).then(res => res = `${res}_updated`);
  return promise;
}

const call3 = () => {
  const promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log("call3");
      resolve("call3");
    }, 1000)
  }).then(res => res = `${res}_updated`);
  return promise;
}

const run = async () => {
  console.log("Start");
  console.log(await call1());
  console.log(await call2());
  console.log(await call3());
  console.log("End");
};

run();