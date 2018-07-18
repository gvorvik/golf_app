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

router.get('/current', (req, res) => {
    console.log('req.user:', req.user);
    res.send(req.user);
});

router.get('/logout', (req, res) => {
    req.logout();
    console.log('req.user:', req.user);
    res.sendStatus(200);
})

module.exports = router;