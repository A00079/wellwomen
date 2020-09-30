const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SerwayData = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  activity: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  eatinghabbit: {
    type: String,
    required: true
  },
  goal: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("SerwayData", SerwayData);
