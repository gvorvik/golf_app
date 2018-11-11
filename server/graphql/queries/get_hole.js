const graphql = require('graphql');
const { GraphQLInt, GraphQLNonNull } = graphql;
const HoleType = require('../types/hole_type');
const pool = require('../../modules/pool');

module.exports = {
    type: HoleType,
    args: {hole_id: {type: new GraphQLNonNull(GraphQLInt) }},
    resolve: async (parentValue, {hole_id}, context) => {
        let queryText = `SELECT * FROM "hole" WHERE "id" = $1 ORDER BY "holenumber"`;
        return await pool.query(queryText, [hole_id])
        .then(result=>result.rows[0])
        .catch(err=>err)
    }
}