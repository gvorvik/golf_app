const graphql = require('graphql');
const pool = require('../modules/pool');
const { GraphQLObjectType, GraphQLID, GraphQLNonNull } = graphql;

const UserType = require('./types/user_type');
const getCourse = require('./queries/get_course');
const getCourses = require('./queries/get_courses');
const getHole = require('./queries/get_hole');
const getHoles = require('./queries/get_holes');
const getRound = require('./queries/get_round');
const getAllRounds = require('./queries/get_all_rounds');
const getRoundsByCourse = require('./queries/get_rounds_by_course');
const getScore = require('./queries/get_score');
const getSumRoundsPerCourse = require('./queries/get_sum_rounds_per_course');
const getRoundScores = require('./queries/get_round_scores');

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
        getCourse,
        getCourses,
        getHole,
        getHoles,
        getAllRounds,
        getRound,
        getRoundsByCourse,
        getScore,
        getSumRoundsPerCourse,
        getRoundScores
    })
})

module.exports = RootQuery;