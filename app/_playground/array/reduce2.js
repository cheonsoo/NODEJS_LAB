let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = arr.reduce((accumulate, current, idx, origin) => {
  console.log(JSON.stringify(origin));
  console.log(`accumulate: ${accumulate}, current: ${current}, idx: ${idx}`);
  if (current % 2 === 1) accumulate.push(current);
  return accumulate;
}, []);

console.log(result);
