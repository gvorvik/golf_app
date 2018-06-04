const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const scoreRouter = require('./routes/scoreRouter');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('build'));

app.use('/api/score', scoreRouter);


app.listen(PORT, () => {
    console.log(`App listening at ${PORT}`);
});