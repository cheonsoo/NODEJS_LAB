const mongoose = require('mongoose');

const SlackErrorLogSchema = new mongoose.Schema({
  date: { type: Date, required: false },
  errMessage: { type: String, required: false },
  errDetail: { type: String, required: false }
});

/* single name of model, schema, specific name of target collection */
module.exports = mongoose.model('slackErrorLog', SlackErrorLogSchema, 'slackErrorLogTest');
