const fs = require('fs');

const filePath = '/Users/chance/Workspace/js/NODEJS_LAB/data/slack/slack__20191202.txt';
const content = fs.readFileSync(filePath).toString().split('\n');

const slackLog = [];
let extracted = {};
const regexp = new RegExp('\\d{2}월\\s(\\d{2})\\s(\\d{2})\\:(\\d{2})\\:(\\d{2})\\s(오전|오후)', 'gi');

function getDateFromString(_d) {
  const y = new Date().getFullYear();
  const m = _d.substr(0, 2);
  const d = _d.substr(4, 2);
  const hh = _d.substr(7, 2);
  const mm = _d.substr(10, 2);
  const dd = _d.substr(13, 2);
  const dateStr = `${y}-${m}-${d}T${hh}:${mm}:${dd}.000Z`;
  return new Date(dateStr);
}

function getDateString() {
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
      month = month < 10 ? `0${month}` : month;
  let day = date.getDate();
      day = day < 10 ? `0${day}` : day;
  let hours = date.getHours();
      hours = hours < 10 ? `0${hours}` : hours;
  let minutes = date.getMinutes();
      minutes = minutes < 10 ? `0${minutes}` : minutes;
  let seconds = date.getSeconds();
      seconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${year}${month}${day}_${hours}${minutes}${seconds}`;
};

content.forEach((line, idx) => {
  const regResult = line.match(regexp);
  if (regResult && regResult.length > 0) {
    extracted = {};
    extracted = {
      date: getDateFromString(regResult[0]),
      errMessage: line.split('(')[0].replace('ERROR - ', '').replace(regResult[0], '').trim(),
      errDetail: line
    };
    slackLog.push(extracted);
  } else {
    // continue
    // console.log(line);
  }
});

console.log(slackLog);
console.log(getDateString());
fs.writeFileSync(`/Users/chance/Workspace/js/NODEJS_LAB/data/extracted/extracted__${getDateString()}.json`, JSON.stringify(slackLog));