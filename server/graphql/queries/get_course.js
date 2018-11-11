const graphql = require('graphql');
const { GraphQLID, GraphQLNonNull } = graphql;
const CourseType = require('../types/course_type');
const pool = require('../../modules/pool');

module.exports = {
    type: CourseType,
    args: { id: { type: new GraphQLNonNull(GraphQLID) } },
    resolve: async (parentValue, {id}) => {
        const queryText = `SELECT * FROM "course" WHERE "id" = $1`;
        return await pool.query(queryText, [id])
        .then( result => result.rows[0])
        .catch(err => err);              
    }
};