const { WebClient, LogLevel } = require('@slack/web-api');
require('dotenv').config();

const token = process.env.SLACK_BOT_TOKEN;

console.log(token);
const slackClient = new WebClient(token, {
	logLevel: LogLevel.DEBUG
});

module.exports = slackClient;
