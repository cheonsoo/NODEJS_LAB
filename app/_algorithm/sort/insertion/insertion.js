const start = new Date().getTime();

const sort = data => {
  for (let i = 1; i < data.length; i++) {
    let tmp = data[i];

    for (let k = i - 1; k >= 0; k--) {
      if (data[k] > tmp) {
        // swap
        data[k + 1] = data[k];
        data[k] = tmp;
      }
    }
  }
  return data;
};

const arr = [];
for (let i = 0; i < 100; i++) {
  arr.push(parseInt(Math.random() * 100));
}

console.log(sort(arr).join(','));
console.log(`exe time : ${new Date().getTime() - start}`);