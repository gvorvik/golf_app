const router = require('express').Router();
const pool = require('../modules/pool');
const {authenticate} = require('./../modules/rejectUnauthenticated');

router.get('/courses', authenticate, (req, res) => {
    const queryText = `SELECT * FROM "course" WHERE "person_id" = $1`;
    pool.query(queryText, [req.user.id])
    .then(result=>res.send(result.rows))
    .catch(err=>res.sendStatus(500));
});

router.get('/selectedcourse/:id', authenticate, (req, res) => {
    let queryText = `SELECT * FROM "hole" WHERE "course_id"=$1`;
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

router.get('/holeinfo/:courseID', authenticate, (req, res) => {
    let courseID = req.params.courseID;
    let queryText = `SELECT * FROM "hole" WHERE "course_id" = $1 ORDER BY "holenumber"`;
    pool.query(queryText, [courseID])
    .then(response=>res.send(response.rows))
    .catch(err=>res.sendStatus(500))
});

router.post('/', authenticate, (req, res) => {
    const newCourse = req.body;
    let queryText = `INSERT INTO "course" ("name", "city", "holes", "person_id")
                    VALUES ($1, $2, $3, $4)`
    pool.query(queryText, [newCourse.name, newCourse.city, newCourse.numberOfHoles, req.user.id])
    .then(response => res.sendStatus(200))
    .catch(err => res.sendStatus(500));
});

router.post('/holes', authenticate, (req, res) => {
    let holes = req.body.holeInformation;
    let id = req.body.id;
    let queryText = `INSERT INTO "hole" ("holenumber", "par", "yardage", "handicap", "course_id")
                        VALUES ($1, $2, $3, $4, $5)`;
    
    for(let i in holes) {
        let hole = holes[i];
        pool.query(queryText, [hole.holeNumber, hole.par, hole.yardage, hole.handicap, id])
        .then(response => console.log('yay'))
        .catch(err => console.log(err));
    }
    
    res.sendStatus(200);
})

module.exports = router;