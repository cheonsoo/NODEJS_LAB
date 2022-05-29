const obj = {
  a: '1',
  b: '2',
  c: {
    d: '4'
  }
};

// const obj2 = Object.assign({}, obj);
const obj2 = { ...obj };

obj2.c.d = '2';

console.log(obj.c.d);
console.log(obj2.c.d);

console.log(obj.c.d === obj2.c.d);
