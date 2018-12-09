const graphql = require('graphql');
const { GraphQLInt, GraphQLNonNull } = graphql;
const ScoreType = require('../types/score_type');

module.exports = {
    type: ScoreType,
    args: {
      score: { type: new GraphQLNonNull(GraphQLInt) },
      hole_id: {type: new GraphQLNonNull(GraphQLInt)},
      round_id: {type: new GraphQLNonNull(GraphQLInt)}
    },
    resolve(parentValue, { score, hole_id, round_id }) {
      let queryText = `INSERT INTO "scores" ("score", "hole_id", "round_id")
      VALUES ($1, $2, $3);`;
      pool.query(queryText, [score, hole_id, round_id])
      .then(response => response)
      .catch(err => err);
    }
}
