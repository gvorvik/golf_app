const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

const scores = [4,3,2,1];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('build'));

app.post('/api/score', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`App listening at ${PORT}`);
});