function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const convertArrayToList = arr => {
  const list = new ListNode(0);
  arr.reduce((prev, current) => (prev.next = new ListNode(current)), list);
  return list.next;
};

const convertListToArray = list => {
  const arr = [];
  let head = list;
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
};

let arr = [1, 2, 3, 4, 5];
console.log(arr);
const list = convertArrayToList(arr);
console.log(list);
arr = convertListToArray(list);
console.log(arr);
