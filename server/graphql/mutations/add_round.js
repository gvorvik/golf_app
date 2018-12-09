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
    resolve(parentValue, {date_played, total_score, course_id, scores}, context) {
        let roundQueryText = `INSERT INTO "round" ("date_played", "total_score", "course_id", "person_id")
        VALUES ($1, $2, $3, $4)
        RETURNING "id";`;
        let scoreQueryText = `INSERT INTO "scores" ("score", "hole_id", "round_id")
        VALUES ($1, $2, $3)`;
        pool.query(roundQueryText, [date_played, total_score, course_id, context.user.id])
        .then(response => {
            let round_id=response.rows[0].id;
            scores.forEach(scoreObject => {
                let {score, hole_id} = scoreObject
                pool.query(scoreQueryText, [score, hole_id, round_id])
                .then(response => response)
                .catch(err => err)
            })
        })
        .catch(err => {});
    }
}