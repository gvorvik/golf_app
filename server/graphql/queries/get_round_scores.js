const graphql = require('graphql');
const { GraphQLInt, GraphQLNonNull, GraphQLList } = graphql;
const ScoreType = require('../types/score_type');
const pool = require('../../modules/pool');

module.exports = {
    type: new GraphQLList(ScoreType),
    args: {round_id: {type: new GraphQLNonNull(GraphQLInt) }},
    resolve: async (parentValue, {round_id}) => {
        let queryText = `SELECT * FROM "scores" WHERE round_id = $1`;
        return await pool.query(queryText, [round_id])
        .then(response => response.rows)
        .catch(err => err)
    }
}