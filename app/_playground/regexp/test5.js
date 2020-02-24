const content = '[TYPE] : SCOUTER\n[NAME] : /hsgwportal01/P11\n[LEVEL] : ERROR\n[TITLE] : xlog Error\n[MESSAGE] : /lightpack/planner/calendar/create.do - cannot retry due to server authentication, in streaming mode';

const extracted = {};
content.split('\n').forEach(line => {
  const res = line.split(' : ');
  // console.log(res);
  extracted[res[0].replace('[', '').replace(']', '').toLowerCase()] = res[1];
});

console.log(extracted);
console.log('ver 1.1');