const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AdminSchema = new Schema({
  admin_email_id: {
    type: String,
    required: true
  },
  admin_password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Admin = mongoose.model("admindetails", AdminSchema);
