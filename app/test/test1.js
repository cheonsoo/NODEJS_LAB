var var1 = 'var1';
function fn1() {
  console.log(var1);
}
const fn2 = () => {
  console.log(this.var1);
};
fn1();
fn2();
