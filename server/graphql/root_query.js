const graphql = require('graphql');
const pool = require('../modules/pool');
const { GraphQLObjectType, GraphQLID, GraphQLNonNull } = graphql;

const UserType = require('./types/user_type');
const course = require('./queries/course');
const courses = require('./queries/courses');
const hole = require('./queries/hole');
const holes = require('./queries/hole');
const round = require('./queries/round');
const rounds = require('./queries/rounds');
const score = require('./queries/score');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        user: {
            type: UserType,
            args: { id: {type: new GraphQLNonNull(GraphQLID) } },
            resolve: async (parentValue, {id}) => {
                const queryText = `SELECT "id", "username", "first", "last" FROM "person" WHERE "id" = $1`;
                return await pool.query(queryText, [id])
                .then( result => result.rows[0])
                .catch(err => err);              
            }
        },
        course,
        courses,
        hole,
        holes,
        round,
        rounds,
        score
    })
})

module.exports = RootQuery;