const router = require('express').Router();
const pool = require('../modules/pool');
const {authenticate} = require('./../modules/rejectUnauthenticated');

router.get('/selectedcourse/:id', authenticate, (req, res) => {
    let queryText = `SELECT * FROM "hole" WHERE "course_id"=$1 ORDER BY "holenumber"`;
    pool.query(queryText, [req.params.id])
    .then(response=>res.send(response.rows))
    .catch(err=>res.sendStatus(500));
});

router.get('/:courseName', authenticate, (req, res) => {
    let courseName = req.params.courseName;
    const queryText = `SELECT "id" FROM "course" WHERE "name" = $1 AND "person_id" = $2`;
    pool.query(queryText, [courseName, req.user.id])
    .then(response => res.send(response.rows))
    .catch(err => res.sendStatus(500));
});

module.exports = router;