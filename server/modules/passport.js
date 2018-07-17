const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;

module.exports = (passport, pool) => {
    passport.use(new LocalStrategy(
        (username, password, done) => {
            return pool.query("SELECT id, username, password FROM person WHERE username=$1 AND password=$2",
                [username, password])
                .then((result) => {
                    if(result.rows.length === 0) {
                        return done(null, false, { message: 'Incorrect username or password.' });
                    }
                    return done(null, result.rows[0]);
                })
                .catch((err) => {
                    console.log(err);
                    return done(null, false, { message: 'Wrong user name or password' });
                });
        }));

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });
}

