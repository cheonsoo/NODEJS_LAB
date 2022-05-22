function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const convertListToArray = list => {
  const array = [];
  let node = list;
  while (node) {
    array.push(node.val);
    node = node.next;
  }
  return array;
};

const convertArrayToList = array => {
  const list = new ListNode(0);
  array.reduce((prev, current) => (prev.next = new ListNode(current)), list);
  return list.next;
};

const run = (list, swapIdx) => {
  let node = list;
  while (node) {
    if (!node.next) break;

    let tmpVal = node.val;
    node.val = node.next.val;
    node.next.val = tmpVal;
    node = node.next.next;
  }
  return list;
};

const arr = [1, 2, 3, 4, 5];
const list = convertArrayToList(arr);
const result = run(list);

console.log('result', convertListToArray(result));
