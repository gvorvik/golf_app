const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pool = require('./modules/pool');
const PORT = process.env.PORT || 5000;

const scoreRouter = require('./routes/scoreRouter');
const courseRouter = require('./routes/courseRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session())
require('./modules/passport')(passport, pool);
app.use(express.static('build'));


app.post('/api/login', passport.authenticate('local'),
    (req, res) => {
        console.log('req.user:', req.user);
        res.send(req.user);
    }
);

app.use('/api/score', scoreRouter);
app.use('/api/course', courseRouter);


app.listen(PORT, () => {
    console.log(`App listening at ${PORT}`);
});