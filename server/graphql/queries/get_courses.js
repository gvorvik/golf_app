const graphql = require('graphql');
const { GraphQLInt, GraphQLNonNull, GraphQLList } = graphql;
const CourseType = require('../types/course_type');
const pool = require('../../modules/pool');

module.exports = {
    type: new GraphQLList(CourseType),
    args: { person_id: { type: new GraphQLNonNull(GraphQLInt) } },
    resolve: async (parentValue, args, context) => {
        const queryText = `SELECT * FROM "course" where "person_id" = $1`;
        return await pool.query(queryText, [context.user.id])
        .then(result => result.rows)
        .catch(err => err);
    }
}