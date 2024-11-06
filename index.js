const app = require('express');
const cors = require('cors');
require('dotenv').config();

PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.get('/health', (req, res) => {
	res.send({message: 'Health Ok!'})
});

app.listen(PORT, () => {
	console.log(`server is listening on ${PORT}`)
})