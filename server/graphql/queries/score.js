const graphql = require('graphql');
const { GraphQLInt, GraphQLNonNull } = graphql;
const ScoreType = require('./../types/score_type');
const pool = require('./../../modules/pool');

module.exports = {
    type: ScoreType,
    args: {id: {type: new GraphQLNonNull(GraphQLInt) }},
    resolve: async (parentValue, {id}) => {
        let queryText = `SELECT * FROM "scores" WHERE "id"=$1`;
        return await pool.query(queryText, [id])
           .then(result => result.rows[0])
           .catch(err => err);
    }
}