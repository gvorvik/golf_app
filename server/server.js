const express = require('express');
require('dotenv').config();
const app = express();
const expressGraphql = require('express-graphql');
const bodyParser = require('body-parser');
const passport = require('passport');

const pool = require('./modules/pool');
const schema = require('./graphql/schema');
const sessionMiddleware = require('./modules/session_middleware');
const loginRouter = require('./routes/loginRouter');
const {authenticate} = require('./modules/rejectUnauthenticated');

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(sessionMiddleware);
require('./modules/passport')(passport, pool);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('build'));

app.use('/graphql', authenticate, expressGraphql(req => ({
    graphiql: true,
    schema
})));

app.use('/api/login', loginRouter);

app.listen(PORT, () => {
    console.log(`App listening at ${PORT}`);
});