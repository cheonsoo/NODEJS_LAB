const mongoose = require('mongoose');
const TEST = require('./model/test');

const CONFIG = {
  MONGO: {
    URL: "127.0.0.1",
    PORT: "27017",
    ID: "gsventures",
    PW: "gsventures**2019"
  }
};

function connectToMDB() {
  const mongoUrl = `mongodb://${CONFIG.MONGO.ID}:${CONFIG.MONGO.PW}@${CONFIG.MONGO.URL}:${CONFIG.MONGO.PORT}/cpark?authSource=admin`;
  const mdbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };
  mongoose.connect(mongoUrl, mdbOptions);

  // CONNECT TO MONGODB SERVER
  const db = mongoose.connection;
  db.on("error", console.error);
  db.once("open", () => {
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
    console.log(mongoUrl);
  });
}

async function insertDoc() {
  const doc = {
    id: 'id',
    name: 'name',
    date: new Date()
  };
  await new TEST(doc).save();
}

async function insertDocs(_slackLog) {
  const docs = [
    {
      id: 'id',
      name: 'name',
      date: new Date()
    }, {
      id: 'id',
      name: 'name',
      date: new Date()
    }, {
      id: 'id',
      name: 'name',
      date: new Date()
    }, {
      id: 'id',
      name: 'name',
      date: new Date()
    }
  ];
  await TEST.insertMany(docs);
}

async function run() {
  await connectToMDB();

  // await insertDoc();

  await insertDocs();

  process.exit(1);
}

run();