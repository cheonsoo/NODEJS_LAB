const content = '[TYPE] : SCOUTER\n[NAME] : /hsgwportal01/P11\n[LEVEL] : ERROR\n[TITLE] : xlog Error\n[MESSAGE] : /lightpack/planner/calendar/create.do - cannot retry due to server authentication, in streaming mode';

// const regexp = new RegExp('(?!\[[a-zA-Z]*\])(.*)\n', 'gi');
const regexp = new RegExp('(?!\[[a-zA-Z]*\]\\s\:\\s).*\n', 'gi');
const regResult = content.match(regexp);

console.log(regResult);
console.log('ver 1.1');