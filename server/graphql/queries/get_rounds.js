const graphql = require('graphql');
const { GraphQLInt, GraphQLNonNull, GraphQLList } = graphql;
const RoundType = require('../types/round_type');
const pool = require('../../modules/pool');

module.exports = {
    type: new GraphQLList(RoundType),
    args: {
        person_id: {type: new GraphQLNonNull(GraphQLInt) },
        course_id: {type: new GraphQLNonNull(GraphQLInt) }
    },
    resolve: async (parentValue, {course_id, person_id}) => {
        let queryText = `SELECT * FROM "round" WHERE "course_id" = $1 AND "person_id" = $2 ORDER BY "date_played"`;
        return await pool.query(queryText, [course_id, person_id])
        .then(result=>result.rows)
        .catch(err=>err)
    }
}