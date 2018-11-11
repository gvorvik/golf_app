const graphql = require('graphql');
const { GraphQLInt, GraphQLNonNull, GraphQLList } = graphql;
const HoleType = require('../types/hole_type');
const pool = require('../../modules/pool');

module.exports = {
    type: new GraphQLList(HoleType),
    args: {course_id: {type: new GraphQLNonNull(GraphQLInt) }},
    resolve: async (parentValue, {course_id}) => {
        let queryText = `SELECT * FROM "hole" WHERE "course_id" = $1 ORDER BY "holenumber"`;
        return await pool.query(queryText, [course_id])
        .then(result=>result.rows)
        .catch(err=>err)
    }
}