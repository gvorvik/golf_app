const router = require('express').Router();
const pool = require('../modules/pool');

courses = [];

router.post('/', (req, res) => {
    const newCourse = req.body;
    console.log(newCourse);
    res.sendStatus(200);
});

module.exports = router;