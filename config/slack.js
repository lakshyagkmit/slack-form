const { WebClient } = require('@slack/web-api');

const token = process.env.SLACK_BOT_TOKEN;

const slackClient = new WebClient(token);

module.exports = slackClient;
