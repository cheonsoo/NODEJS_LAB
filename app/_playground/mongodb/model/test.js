const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
  id: { type: String, required: false },
  name: { type: String, required: false },
  date: { type: Date, required: false }
});

/* single name of model, schema, specific name of target collection */
module.exports = mongoose.model('test', TestSchema, 'test');
