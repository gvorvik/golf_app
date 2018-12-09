const graphql = require('graphql');
const { GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLList } = graphql;
const CourseInputType = require('../types/course_input_type');
const pool = require('../../modules/pool');
const HoleInputType = require('../types/hole_input_type');

module.exports = {
    type: CourseInputType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      city: {type: new GraphQLNonNull(GraphQLString)},
      holes: {type: new GraphQLNonNull(GraphQLInt)},
      holeInformation: {type: new GraphQLNonNull(new GraphQLList(HoleInputType))}
    },
    resolve(parentValue, {name, city, holes, holeInformation}, context) {
        let courseQueryText = `INSERT INTO "course" ("name", "city", "holes", "person_id")
                        VALUES ($1, $2, $3, $4) RETURNING id`;
        let holeQueryText = `INSERT INTO "hole" ("holenumber", "par", "handicap", "yardage", "course_id")
        VALUES ($1, $2, $3, $4, $5)`;
        pool.query(courseQueryText, [name, city, holes, context.user.id])
        .then(response => {
            let courseId=response.rows[0].id;
            holeInformation.forEach(hole => {
                let {holeNumber, par, handicap, yardage} = hole
                pool.query(holeQueryText, [holeNumber, par, handicap, yardage, courseId])
                .then(response => response)
                .catch(err => err)
            })
        })
        .catch(err => err);
    }
}