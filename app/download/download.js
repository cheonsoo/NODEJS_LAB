const fs = require("fs");

const download = () => {
  fs.writeFile("test2.txt", "test", "utf8", function() {
    console.log("done");
  });

};

download();