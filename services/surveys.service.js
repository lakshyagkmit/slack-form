const slackClient = require('../config/slack');

// Sample questions
const questions = [
  {
    id: 1,
    text: 'What is your favorite color?',
    options: ['Red', 'Green', 'Blue', 'Yellow']
  },
  {
    id: 2,
    text: 'What is your favorite animal?',
    options: ['Dog', 'Cat', 'Bird', 'Fish']
  }
];

// Function to send all questions to the user
async function sendQuestionsToUser(userId) {
  for (const question of questions) {
    const options = question.options.map((option, index) => ({
      text: {
        type: 'plain_text',
        text: option,
        emoji: true
      },
      value: `${question.id}_${index}`
    }));

    await slackClient.chat.postMessage({
      channel: userId,
      text: question.text,
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*${question.text}*`
          }
        },
        {
          type: 'actions',
          elements: options.map((option, index) => ({
            type: 'button',
            text: option.text,
            value: `${question.id}_${index}`
          }))
        }
      ]
    });
  }

  await slackClient.chat.postMessage({
    channel: userId,
    text: 'Thank you for completing the questionnaire!'
  });
}

module.exports = {
  sendQuestionsToUser
};
