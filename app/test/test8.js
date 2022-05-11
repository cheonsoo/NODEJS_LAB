function fn1() {
  this.a = 'a';
}

const a = new fn1();

console.log(typeof fn1);
console.log(typeof a);
