let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const fn1 = () => {
  const result = arr.reduce((accumulate, current, idx) => {
    console.log(`accumulate: ${accumulate}, current: ${current}, idx: ${idx}`);
    return accumulate + current;
  }, 0);

  console.log(result);
};

const reduceFilter = () => {
  const result = arr.reduce((acc, cur, idx, o) => {
    if (cur % 2 === 0) acc.push(cur);
    return acc;
  }, []);
  console.log(result);
};

reduceFilter();
