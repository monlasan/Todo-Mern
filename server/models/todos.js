const mongoose = require('mongoose');
let todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  // id: String,
});
module.exports = mongoose.model('Todo', todoSchema);
