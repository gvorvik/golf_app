const router = require('express').Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');
const pool = require('../modules/pool');


router.post('/', passport.authenticate('local'),(req, res) => {
        console.log('is authenticated?', req.isAuthenticated());
        if (req.isAuthenticated()) {
            
            res.send(req.user);
        }
    }
);

router.post('/register', (req, res) => {
    let {username, password, firstName, lastName} = req.body;
    let queryText = `INSERT INTO "person" ("username", "password", "first", "last")
                    VALUES ($1, $2, $3, $4)`;
    bcrypt.genSalt(10, (err, salt) => {
        if(err) {
            res.sendStatus(500);
        }

        bcrypt.hash(password, salt, (err, hash) => {
            if(err) {
                res.sendStatus(500);
            }
            password = hash;
            pool.query(queryText, [username, password, firstName, lastName])
            .then(response=>{
                res.sendStatus(200);
            })
            .catch(err=>{
                res.sendStatus(500);
            });
        });
    });
});

router.get('/current', (req, res) => {
    res.send(req.user);
});

router.get('/logout', (req, res) => {
    req.logout();
    console.log('is authenitacted logout?', req.isAuthenticated());
    res.sendStatus(200);
})

module.exports = router;