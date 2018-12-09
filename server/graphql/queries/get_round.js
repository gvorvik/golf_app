const graphql = require('graphql');
const { GraphQLInt, GraphQLNonNull } = graphql;
const RoundType = require('./../types/round_type');
const pool = require('./../../modules/pool');

module.exports = {
    type: RoundType,
    args: {id: {type: new GraphQLNonNull(GraphQLInt) }},
    resolve: async (parentValue, {id}) => {
        let queryText = `SELECT * FROM "round" WHERE "id"=$1`;
        return await pool.query(queryText, [id])
           .then(result => result.rows[0])
           .catch(err => err);
    }
}