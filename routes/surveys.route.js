const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/surveys.controller');

router.post('/events', surveyController.newUserJoin); 

module.exports = router;
