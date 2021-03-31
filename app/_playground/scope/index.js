var start = new Date().getTime();

var A = {
  b1: 'b1',
  b2: function () {
    console.log(this);
  },
  b3: {
    c1: function () {
      console.log(this);
    },
    c2: () => console.log(this)
  }
};

function fn1() {
  console.log(this);
}
var fn2 = () => console.log(this);

console.log('### start');

A.b2();
A.b3.c2();
fn1();
fn2();

console.log(`### exe time: ${new Date().getTime() - start}`);
