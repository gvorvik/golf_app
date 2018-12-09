const graphql = require('graphql');
const { GraphQLList } = graphql;
const RoundType = require('../types/round_type');
const pool = require('../../modules/pool');

module.exports = {
    type: new GraphQLList(RoundType),
    args: {},
    resolve: async (parentValue, args, context) => {
        let queryText = `SELECT * FROM "round" WHERE "person_id" = $1 ORDER BY "date_played" DESC`;
        return await pool.query(queryText, [context.user.id])
        .then(result => result.rows)
        .catch(err => err)
    }
}