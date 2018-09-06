const router = require('express').Router();
const pool = require('./../modules/pool');
const {authenticate} = require('./../modules/rejectUnauthenticated');

router.get('/recentscores', authenticate, (req, res) => {
    let queryText = `SELECT "round"."date_played", "round"."total_score", "course"."name"
                    FROM "round"
                    JOIN "course" ON "round"."course_id"="course"."id"
                    WHERE "round"."person_id" = $1
                    ORDER BY "date_played" DESC LIMIT 5;`
    pool.query(queryText, [req.user.id])
    .then(response => res.send(response.rows))
    .catch(err => res.sendStatus(500))
});

router.get('/coursescores/:selectedCourse', (req, res) => {
    let queryText = `SELECT "round"."id", "round"."date_played", "round"."total_score", "course"."name", "course"."city", "course"."holes" 
                    FROM "course"
                    JOIN "round" ON "round"."course_id"="course"."id"
                    WHERE "course"."name"=$1
                    AND "round"."person_id" = $2
                    ORDER BY "date_played" DESC;`;
    pool.query(queryText, [req.params.selectedCourse, req.user.id])
    .then(response => res.send(response.rows))
    .catch(err => res.sendStatus(500))
});

router.get('/scoredetails/:id', (req, res) => {
    let queryText = `SELECT "scores"."score", "hole"."holenumber", "hole"."par", "hole"."yardage", "hole"."handicap"
                    FROM "scores"
                    JOIN "hole" ON "scores"."hole_id"="hole"."id"
                    WHERE "round_id"=$1
                    ORDER BY "holenumber";`;
    pool.query(queryText, [req.params.id])
    .then(response => res.send(response.rows))
    .catch(err => res.send(err));
});

router.get('/totalrounds', (req, res) => {
    let queryText = `SELECT COUNT(*) FROM "round" WHERE "person_id" = $1;`;
    pool.query(queryText, [req.user.id])
    .then(response => {
        res.send(response.rows[0]);
    })
    .catch(err => res.send(err));
});

router.get('/topcourses', (req, res) => {
    let queryText = `SELECT "course"."name", COUNT(*)
    FROM "round" JOIN "course" ON "round"."course_id"="course"."id"
    WHERE "round"."person_id" = $1
    GROUP BY "course"."name"
    LIMIT 5`;
    pool.query(queryText, [req.user.id])
    .then(response => {
        res.send(response.rows);
    })
    .catch(err => res.send(err));
})

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