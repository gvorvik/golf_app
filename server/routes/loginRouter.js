const router = require('express').Router();
const passport = require('passport');

router.post('/', passport.authenticate('local'),
    (req, res) => {
        console.log('req.user:', req.user);
        console.log('authenticated?', req.isAuthenticated());
        res.send(req.user);
    }
);

module.exports = router;