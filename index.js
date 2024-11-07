const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const surveyRoutes = require('./routes/surveys.route');
require('dotenv').config();

const app = express();

PORT = process.env.PORT;
console.log(PORT);

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// health check route
app.get('/health', (req, res) => {
	res.send({message: 'Health Ok!'})
});

// slack routes
app.use('/slack', surveyRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
