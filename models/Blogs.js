const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BlogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  shortdiscription: {
    type: String,
    required: true
  },
  youtubelink:{
    type: String,
    required: true
  },
  anytag: {
    type: String,
    default: false
  },
  discription: {
    type: String,
    required: true
  },
  image :{
    type: String,
    required: true
  },
  imageurl :{
    type: String,
    required: false
  },
  date: {
    type: Date,
    required: true
  }
});

module.exports = User = mongoose.model("blog", BlogSchema);
