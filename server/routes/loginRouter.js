const router = require('express').Router();
const passport = require('passport');

router.post('/', passport.authenticate('local'),
    (req, res) => {
        console.log('req.user:', req.user);
        if (req.isAuthenticated()) {
            console.log('authenticated!');
            res.send(req.user);
        }
    }
);

module.exports = router;