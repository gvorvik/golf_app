const graphql = require('graphql');
const { GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLList } = graphql;
const RoundInputType = require('../types/round_input_type');
const pool = require('../../modules/pool');
const ScoreInputType = require('./../types/score_input_type');

module.exports = {
    type: RoundInputType,
    args: {
      date_played: { type: new GraphQLNonNull(GraphQLString) },
      total_score: {type: new GraphQLNonNull(GraphQLInt)},
      course_id: {type: new GraphQLNonNull(GraphQLInt)},
      scores: {type: new GraphQLList(ScoreInputType)}
    },
    resolve(parentValue, args, context) {
        console.log(args);
        // let queryText = `INSERT INTO "round" ("date_played", "total_score", "course_id", "person_id")
        // VALUES ($1, $2, $3, $4)
        // RETURNING "id";`;
        // pool.query(queryText, [date_played, total_score, course_id, context.user.id])
        // .then(response => {
        //     console.log(response);
        // })
        // .catch(err => {});
    }
}