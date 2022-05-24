function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const convertArrayToList = arr => {
  let list = new ListNode(-1);
  arr.reduce((prev, current) => (prev.next = new ListNode(current)), list);
  return list.next;
};

const convertListToArray = list => {
  if (list.length === 0) return [];
  if (!list.next) return [list.val];
  // if (!list.next) return [list.val];

  const arr = [];
  while (list) {
    arr.push(list.val);
    list = list.next;
  }

  return arr;
};

ListNode.prototype.convertArrayToList = arr => {
  let list = new ListNode(-1);
  arr.reduce((prev, current) => (prev.next = new ListNode(current)), list);
  return list.next;
};

ListNode.prototype.convertListToArray = list => {
  if (list.length === 0) return [];
  if (!list.next) return [list.val];

  const arr = [];
  while (list) {
    arr.push(list.val);
    list = list.next;
  }

  return arr;
};

const list = new ListNode(1);

const arr = list.convertListToArray(list);

console.log(list);

console.log(arr);
