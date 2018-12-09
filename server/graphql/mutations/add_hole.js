const graphql = require('graphql');
const { GraphQLString, GraphQLInt, GraphQLNonNull } = graphql;
const HoleType = require('../types/hole_type');
const pool = require('../../modules/pool');

module.exports = {
    type: HoleType,
    args: {
      hole_number: { type: new GraphQLNonNull(GraphQLInt) },
      yardage: {type: new GraphQLNonNull(GraphQLInt)},
      handicap: {type: new GraphQLNonNull(GraphQLInt)},
      par: {type: new GraphQLNonNull(GraphQLInt)},
      course_id: {type: new GraphQLNonNull(GraphQLInt)}
    },
    resolve(parentValue, { hole_number, yardage, handicap, par, course_id }) {
        let queryText = `INSERT INTO "hole" ("holenumber", "par", "yardage", "handicap", "course_id")
                            VALUES ($1, $2, $3, $4, $5)`;

        pool.query(queryText, [hole_number, par, yardage, handicap, course_id])
        .then(response => response)
        .catch(err => err);
    }
}