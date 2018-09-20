const router = require('express').Router();
const pool = require('./../modules/pool');
const {authenticate} = require('./../modules/rejectUnauthenticated');

router.get('/courseinfo/:id', authenticate, (req, res) => {
    let queryText = 'SELECT * FROM hole WHERE course_id = $1 ORDER BY holenumber'
    pool.query(queryText, [req.params.id])
    .then(response => res.send(response.rows))
    .catch(err => res.send(err));
});

router.get('/holeinfo/:id', authenticate, (req, res) => {
    let queryText = 'SELECT * FROM hole where id = $1';
    pool.query(queryText, [req.params.id])
    .then(response => res.send(response.rows))
    .catch(err => res.send(err));
});

router.get('/holescores/:id', authenticate, (req, res) => {
    let queryText = `SELECT scores.id, score, date_played FROM scores JOIN round 
                    ON "scores"."round_id" = "round"."id" WHERE hole_id = $1;`;
    pool.query(queryText, [req.params.id])
    .then(response => res.send(response.rows))
    .catch(err => res.send(err));
})

module.exports = router;