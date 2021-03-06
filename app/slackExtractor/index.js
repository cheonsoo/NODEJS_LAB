const fs = require('fs');
const mongoose = require('mongoose');

const CONFIG = require('../../config');
const slackErrorLogSchema = require('./model/slackErrorLog');

let conn;

/**
 * Mongo DB Connection
 */
async function connectToMongoDb() {
    const mongoUrl = `mongodb://${CONFIG.MONGO.ID}:${CONFIG.MONGO.PW}@${CONFIG.MONGO.URL}:${CONFIG.MONGO.PORT}/cpark?authSource=admin`;
    const mdbOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };
    conn = await mongoose.connect(mongoUrl, mdbOptions);

    // CONNECT TO MONGODB SERVER
    var db = mongoose.connection;
    db.on('error', console.error);
    db.once('open', async () => {
        // CONNECTED TO MONGODB SERVER
        console.log("Connected to mongod server");
        console.log(mongoUrl);
    });
}

/**
 * Error Log Parsing
 */


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

async function getSlackLogs() {
    const fileName = 'slack__20191202.txt';
    const filePath = `/Users/chance/Workspace/js/NODEJS_LAB/data/slack/${fileName}`;
    const content = fs.readFileSync(filePath).toString().split('\n');

    const slackLogs = [];
    let extracted = {};
    const regexp = new RegExp('\\d{2}월\\s(\\d{2})\\s(\\d{2})\\:(\\d{2})\\:(\\d{2})\\s(오전|오후)', 'gi');

    content.forEach((line, idx) => {
        const regResult = line.match(regexp);
        if (regResult && regResult.length > 0) {
          extracted = {};
          extracted = {
            date: getDateFromString(regResult[0]),
            errMessage: line.split('(')[0].replace('ERROR - ', '').replace(regResult[0], '').trim(),
            errDetail: line
          };
          slackLogs.push(extracted);
        } else {
          // continue
          // console.log(line);
        }
    });

    return slackLogs;
}


// console.log(slackLog);
// console.log(getDateString());
function writeFile(_slackLogs) {
    console.log('writing file ...');
    fs.writeFileSync(`/Users/chance/Workspace/js/NODEJS_LAB/data/extracted/extracted__${getDateString()}.json`, JSON.stringify(_slackLogs));
}

async function insertLogs(_slackLogs) {
    console.log('inserting logs ...');
    for (const log of _slackLogs) {
        // log.date = new Date(log.date);
        await slackErrorLogSchema(log).save();
        // console.log(log);
    }
}


async function run() {
    await connectToMongoDb();

    const slackLogs = await getSlackLogs();

    writeFile(slackLogs);

    await insertLogs(slackLogs);

    conn.connection.close();
}

run();