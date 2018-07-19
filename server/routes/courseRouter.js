const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/courses', (req, res) => {
    const queryText = `SELECT * FROM "course"`;
    pool.query(queryText)
    .then(result=>res.send(result.rows))
    .catch(err=>res.sendStatus(500));
});

router.get('/:courseName', (req, res) => {
    let courseName = req.params.courseName;
    const queryText = `SELECT "id" FROM "course" WHERE "name"=$1`;
    pool.query(queryText, [courseName])
    .then(response => res.send(response.rows))
    .catch(err => res.sendStatus(500));
});

router.post('/', (req, res) => {
    const newCourse = req.body;
    let queryText = `INSERT INTO "course" ("name", "city", "holes")
                    VALUES ($1, $2, $3)`
    pool.query(queryText, [newCourse.name, newCourse.city, newCourse.numberOfHoles])
    .then(response => {
        console.log(response);
        res.sendStatus(200);
    })
    .catch(err => res.sendStatus(500))
});

router.post('/holes', (req, res) => {
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