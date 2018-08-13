const mongoose = require( 'mongoose' );

const SurveySchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'Please enter survey title'
  },
  question1: {
    type: String,
    required: 'Please enter a question 1.'
  },
  question2: {
    type: String,
    required: 'Please enter a question 2.'
  },
  question3: {
    type: String,
    required: 'Please enter a question 3.'
  },
  question4: {
    type: String,
    required: 'Please enter a question 4.'
  }
});

module.exports = mongoose.model( 'Survey', SurveySchema );
