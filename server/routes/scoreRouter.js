const router = require('express').Router();
const pool = require('./../modules/pool');
const {authenticate} = require('./../modules/rejectUnauthenticated');

router.post('/newround', authenticate, (req, res) => {
    let round = req.body;
    let queryText = `INSERT INTO "round" ("date_played", "total_score", "course_id", "person_id")
                        VALUES ($1, $2, $3, $4)
                        RETURNING "id";`;
    pool.query(queryText, [round.date, round.totalScore, round.courseID, req.user.id])
    .then(response=> {
        res.send(response.rows[0]);
    })
    .catch(err=>res.sendStatus(500));
})

router.post('/recordscore', authenticate, (req, res) => {
    let roundID = req.body.roundID;
    let scores = req.body.scores;
    let queryText = `INSERT INTO "scores" ("score", "hole_id", "round_id")
                    VALUES ($1, $2, $3);`;
    for(let i in scores) {
        pool.query(queryText, [scores[i], Number(i), roundID])
        .then(response=>{})
        .catch(err=>{});
    }
    res.sendStatus(200);
})

module.exports = router;