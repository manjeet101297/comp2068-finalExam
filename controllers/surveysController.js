var Survey = require( '../models/survey' );
var Answer = require( '../models/answer' );

/* VIEWS */
// Index
exports.index = function( req, res, next ) {
  // create our locals parameter
  let locals = {
    title: 'Questions List'
  };

  Survey.find()
  .then( function ( surveys ) {
    // add the questions to our locals
    locals.surveys = surveys;

    // render our view
    res.render( 'surveys/index', locals )
  })
  .catch( function ( err ) {
    next( err )
  });
};

// Show
exports.show = function ( req, res, next ) {
  // locals
  let locals = {
    title: 'Survey'
  };

  Survey.findById({
    _id: req.params.id
  })
  .then( function ( survey ) {
    // add the surveys to our locals
    locals.survey = survey;

    // render our view
    res.render( 'surveys/show', locals )
  })
  .catch( function ( err ) {
    next( err )
  })
};

// Answer
exports.answerSurvey = function ( req, res, next ) {
  // locals
  let locals = {
    title: 'Answer Survey'
  };

  Survey.findById({
    _id: req.params.id
  })
  .then( function ( survey ) {
    // add the surveys to our locals
    locals.survey = survey;

    // render our view
    res.render( 'surveys/answerSurvey', locals )
  })
  .catch( function ( err ) {
    next( err )
  })
};

///////////////////////////

// New
exports.new = function ( req, res ) {
  // locals
  let locals = {
    title: 'New Survey'
  };

  res.render( 'surveys/new', locals )
};

// Edit
exports.edit = function ( req, res, next ) {
  // locals
  let locals = {
    title: 'Edit Survey'
  };

  Survey.findById({
    _id: req.params.id
  })
  .then( function ( survey ) {
    // add the survey to our locals
    locals.survey = survey;

    // render our view
    res.render( 'surveys/edit', locals )
  })
  .catch( function ( err ) {
    next( err )
  })
};

/* ACTIONS */
// Create
exports.create = function ( req, res, next ) {
  Survey.create({
    title: req.body.title,
    question1: req.body.question1,
    question2: req.body.question2,
    question3: req.body.question3,
    question4: req.body.question4
  })
  .then( function () {
    res.redirect( '/surveys' )
  })
  .catch( function ( err ) {
    next( err )
  })
};

// Update
exports.update = function ( req, res, next ) {
  Survey.findById( req.params.id )
  .then(function ( survey ) {
    survey.question1 = req.body.question1;
    survey.question2 = req.body.question2;
    survey.question3 = req.body.question3;
    survey.question4= req.body.question4;

    survey.save()
    .then(  function () {
      res.redirect( '/surveys' )
    })
    .catch( function ( err ) {
      next( err )
    })
  })
  .catch(function ( err ) {
    next( err )
  })
};

// Delete
exports.delete = function ( req, res ) {
  Survey.remove({
    _id: req.body.id
  })
  .then( function () {
    res.redirect( '/surveys' )
  })
  .catch( function ( err ) {
    next( err )
  })
};
