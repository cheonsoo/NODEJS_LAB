const mongoose = require('mongoose');

const CONFIG = {
  MONGO: {
    URL: "127.0.0.1",
    PORT: "27017",
    ID: "gsventures",
    PW: "gsventures**2019"
  }
};


const mongoUrl = `mongodb://${CONFIG.MONGO.ID}:${CONFIG.MONGO.PW}@${CONFIG.MONGO.URL}:${CONFIG.MONGO.PORT}/gsv?authSource=admin`;
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