const router = require('express').Router();
const pool = require('./../modules/pool');

router.post('/', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

router.post('/newround', (req, res) => {
    let round = req.body;
    console.log(round);
    let queryText = `INSERT INTO "round" ("date_played", "total_score", "course_id")
                        VALUES ($1, $2, $3);`;
    pool.query(queryText, [round.date, round.totalScore, round.courseID])
    .then(response=>res.sendStatus(200))
    .catch(err=>res.sendStatus(500));
})

module.exports = router;