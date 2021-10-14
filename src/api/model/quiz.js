const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  question: {
    type: String,
    trim:true
  },
  options: {
    type: String,
    trim:true
  },
  answer:{
    type:String,
    trim:true
  }
},{ timestamps: true });


module.exports = mongoose.model('Quiz', QuizSchema);