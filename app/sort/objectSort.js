const obj = [
  { id: '1', name: 'name1' },
  { id: '1', name: 'name3' },
  { id: '1', name: 'name2' },
  { id: '1', name: 'name5' },
  { id: '1', name: 'name4' },
  { id: '1', name: 'name6' }
];

// ASC
const sorted = obj.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});

// DESC
const sorted = obj.sort((a, b) => {
  if (a.name > b.name) return -1;
  if (a.name < b.name) return 1;
  return 0;
});

console.log(JSON.stringify(sorted));
