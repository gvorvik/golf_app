const graphql = require('graphql');
const pool = require('./../modules/pool');
const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt, GraphQLID, GraphQLNonNull } = graphql;

const CourseType = require('./types/course_type');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        course: {
            type: CourseType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            resolve: async (parentValue, {id}) => {
                const queryText = `SELECT * FROM "course" WHERE "id" = $1`;
                return await pool.query(queryText, [id])
                .then( result => result.rows[0])
                .catch(err => err);              
            }
        },
        courses: {
            type: new GraphQLList(CourseType),
            resolve: async (parentValue) => {
                const queryText = `SELECT * FROM "course"`;
                return await pool.query(queryText)
                .then(result => result.rows)
                .catch(err => err);
            }
        }
    })
})

module.exports = RootQuery;