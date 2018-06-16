const router = require('express').Router();

courses = [];

router.post('/', (req, res) => {
    const newCourse = req.body;
    courses.push(newCourse);
    console.log(courses);
    res.sendStatus(200);
});

module.exports = router;