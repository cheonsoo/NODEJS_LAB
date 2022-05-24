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
