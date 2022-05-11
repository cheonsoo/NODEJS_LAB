function fn1() {
  for (let i=0; i<100000; i++) {
    //
  }
  console.log("fn1");
}

function fn2() {
  setImmediate(function() {
    console.log("fn2");
  })
}

function fn3() {
  for (let i=0; i<100000; i++) {
    //
  }
  console.log("fn3");
}

fn1();
fn2();
fn3();
fn3();
fn3();
fn3();
fn3();
fn3();
fn3();