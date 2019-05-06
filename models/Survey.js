const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SurveySchema = new Schema({
  userId: {
    type: String
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("survey", SurveySchema);
