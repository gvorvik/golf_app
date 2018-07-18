const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const pool = require('./modules/pool');
const PORT = process.env.PORT || 5000;

const sessionMiddleware = require('./modules/session_middleware');
const scoreRouter = require('./routes/scoreRouter');
const courseRouter = require('./routes/courseRouter');
const loginRouter = require('./routes/loginRouter');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());
require('./modules/passport')(passport, pool);
app.use(express.static('build'));


app.use('/api/login', loginRouter);
app.use('/api/score', scoreRouter);
app.use('/api/course', courseRouter);


app.listen(PORT, () => {
    console.log(`App listening at ${PORT}`);
});