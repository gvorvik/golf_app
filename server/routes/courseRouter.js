const router = require('express').Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    const newCourse = req.body;
    let queryText = `INSERT INTO "course" ("name", "city", "holes")
                    VALUES ($1, $2, $3)`
    pool.query(queryText, [newCourse.name, newCourse.city, newCourse.numberOfHoles])
    .then(response => res.sendStatus(200))
    .catch(err => res.sendStatus(500))
});

router.post('/holes', (req, res) => {
    for(let hole of req.body.courseHoles) {
        console.log(hole.holeNumber, hole.yardage);
    }
    res.sendStatus(200);
})

module.exports = router;