const mongoose = require("mongoose");

const QuizDataSchema = new mongoose.Schema({
    user: String,
    score: Number,
    topic:String
});

module.exports = mongoose.model("QuizData", QuizDataSchema); 
