const mongoose = require('../database'); // Import Mongoose instance from database.js

const taskSchema = new mongoose.Schema({
  description: String,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
