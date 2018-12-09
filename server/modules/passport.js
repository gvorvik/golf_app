
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;

module.exports = (passport, pool) => {
    passport.use(new LocalStrategy(
        (username, password, done) => {
            return pool.query("SELECT * FROM person WHERE username=$1", [username])
                .then((result) => {
                    if(result.rows.length === 0) {
                        return done(null, false, { message: 'Incorrect username.' });
                    }
                    bcrypt.compare(password, result.rows[0].password, (err, res) => {
                        if(res) {
                            return done(null, result.rows[0]);
                        }
                        return done(null, false, { message: 'Incorrect password.' });
                    });
                })
                .catch((err) => {
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

