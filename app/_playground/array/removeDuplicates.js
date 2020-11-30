/*
// things.thing = things.thing.filter((thing, index, self) =>
//   index === self.findIndex((t) => (
//     t.place === thing.place && t.name === thing.name
//   ))
// )
*/
let arr = [];
for (let i = 0; i < 20; i++) {
  let o = {
    key: i,
    id: `ID_${parseInt(Math.random() * 20) + 1}`,
    name: `ID_${parseInt(Math.random() * 20) + 1}`
  };
  arr.push(o);
}

console.log(arr);

arr
  .sort((a, b) => {
    if (a.id > b.id) return -1;
    if (a.id < b.id) return 1;
    return 0;
  })
  .filter((item, idx, self) => idx === self.findIndex(o => o.id === item.id));
