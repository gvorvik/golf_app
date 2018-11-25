const graphql = require('graphql');
const { GraphQLString, GraphQLInt, GraphQLNonNull } = graphql;
const RoundType = require('../types/round_type');
const pool = require('../../modules/pool');

module.exports = {
    type: RoundType,
    args: {
      date_played: { type: new GraphQLNonNull(GraphQLString) },
      total_score: {type: new GraphQLNonNull(GraphQLInt)},
      course_id: {type: new GraphQLNonNull(GraphQLInt)}
    },
    resolve(parentValue, { date_played, total_score, course_id, person_id }, context) {
        let queryText = `INSERT INTO "round" ("date_played", "total_score", "course_id", "person_id")
        VALUES ($1, $2, $3, $4)
        RETURNING "id";`;
        pool.query(queryText, [date_played, total_score, course_id, context.user.id])
        .then(response => {
            console.log(response);
        })
        .catch(err => {});
    }
}