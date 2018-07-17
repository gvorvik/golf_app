const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const PORT = process.env.PORT || 5000;

const scoreRouter = require('./routes/scoreRouter');
const courseRouter = require('./routes/courseRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('build'));

app.post('/api/login', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
})

app.use('/api/score', scoreRouter);
app.use('/api/course', courseRouter);


app.listen(PORT, () => {
    console.log(`App listening at ${PORT}`);
});