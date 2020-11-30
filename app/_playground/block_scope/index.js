const fn1 = () => {
  const fn2 = () => {
    console.log(`### fn2: ${var1}`);
  };

  const var1 = "var1 - test";
  const var2 = "var2";
  const var3 = "var3";
  console.log(var1);



  fn2();
};

fn1();