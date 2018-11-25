const graphql = require('graphql');
const { GraphQLString, GraphQLInt, GraphQLNonNull } = graphql;
const CourseType = require('../types/course_type');
const pool = require('../../modules/pool');

module.exports = {
    type: CourseType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      city: {type: new GraphQLNonNull(GraphQLString)},
      holes: {type: new GraphQLNonNull(GraphQLInt)}
    },
    resolve(parentValue, { name, city, holes, person_id }, context) {
        let queryText = `INSERT INTO "course" ("name", "city", "holes", "person_id")
                        VALUES ($1, $2, $3, $4)`
        pool.query(queryText, [name, city, holes, context.user.id])
        .then(response => {
            console.log(response);
        })
        .catch(err => {});
    }
}