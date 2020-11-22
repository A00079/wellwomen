const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TicketSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phonenumber: {
    type: String,
    default: true
  },
  query: {
    type: String,
    required: true
  },
  ticketid: {
    type: String,
    required: true
  },
  ticketstatus: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("RaisedTicket", TicketSchema);
