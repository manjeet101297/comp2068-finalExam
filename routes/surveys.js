var express = require('express');
var router = express.Router();

// create a link to our surveys controller
var surveysController = require('../controllers/surveysController');

// index (http://my-app.com/surveys)
router.get( '/', surveysController.index );

// new (http://my-app.com/surveys/new)
router.get( '/new', surveysController.new );

// show (http://my-app.com/surveys/12345)
router.get( '/:id', surveysController.show );

// answer (http://my-app.com/surveys/answerSurvey)
router.get( '/answerSurvey/:id', surveysController.answerSurvey );

// edit (http://my-app.com/surveys/12345/edit)
router.get( '/:id/edit', surveysController.edit );

// create (http://my-app.com/surveys)
router.post( '/', surveysController.create );

// update (http://my-app.com/surveys/12345)
router.post( '/:id', surveysController.update );

// delete (http://my-app.com/surveys/12345/delete)
router.post( '/:id/delete', surveysController.delete );

// makes our file public to the application
module.exports = router;
