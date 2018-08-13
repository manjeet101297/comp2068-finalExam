const mongoose = require( 'mongoose' );

const AnswerSchema = new mongoose.Schema({
  answer1: {
    type: String,
    required: 'Please enter answer for question 1.'
  },
  answer2: {
    type: String,
    required: 'Please enter answer for question 2.'
  },
  answer3: {
    type: String,
    required: 'Please enter answer for question 3.'
  },
  answer4: {
    type: String,
    required: 'Please enter answer for question 4.'
  }
});

module.exports = mongoose.model( 'Answer', AnswerSchema );
