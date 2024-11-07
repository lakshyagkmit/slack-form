const surveyService = require('../services/surveys.service')

// Trigger the survey when a new user joins
async function newUserJoin(req, res) {
  try{
    const { type, challenge } = req.body;

  if (type === 'url_verification') {
    res.status(200).send(challenge);
    return;
  }

  const { event } = req.body;

  if (event.type === 'team_join') {
     const userId = event.user.id;
    console.log(userId)
    await surveyService.sendQuestionsToUser(userId);
  }

  res.status(201).send();
  } catch(error) {
    console.log(error);
  }
}

module.exports = {
  newUserJoin
};
