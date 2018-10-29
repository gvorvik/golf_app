const graphql = require('graphql');
const pool = require('./../modules/pool');
const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLInt, GraphQLID, GraphQLNonNull } = graphql;

const CourseType = require('./types/course_type');
const HoleType = require('./types/hole_type');
const RoundType = require('./types/round_type');
const ScoreType = require('./types/score_type');

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
            args: { person_id: { type: new GraphQLNonNull(GraphQLInt) } },
            resolve: async (parentValue, {person_id}) => {
                const queryText = `SELECT * FROM "course" where "person_id" = $1`;
                return await pool.query(queryText, [person_id])
                .then(result => result.rows)
                .catch(err => err);
            }
        },
        hole: {
            type: HoleType,
            args: {hole_id: {type: new GraphQLNonNull(GraphQLInt) }},
            resolve: async (parentValue, {hole_id}) => {
                let queryText = `SELECT * FROM "hole" WHERE "id" = $1 ORDER BY "holenumber"`;
                return await pool.query(queryText, [hole_id])
                .then(result=>result.rows[0])
                .catch(err=>err)
            }
        },
        holes: {
            type: new GraphQLList(HoleType),
            args: {course_id: {type: new GraphQLNonNull(GraphQLInt) }},
            resolve: async (parentValue, {course_id}) => {
                let queryText = `SELECT * FROM "hole" WHERE "course_id" = $1 ORDER BY "holenumber"`;
                return await pool.query(queryText, [course_id])
                .then(result=>result.rows)
                .catch(err=>err)
            }
        },
        round: {
            type: RoundType,
            args: {id: {type: new GraphQLNonNull(GraphQLInt) }},
            resolve: async (parentValue, {id}) => {
                let queryText = `SELECT * FROM "round" WHERE "id"=$1`;
                return await pool.query(queryText, [id])
                   .then(result => result.rows[0])
                   .catch(err => err);
            }
        },
        rounds: {
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
        },
        score: {
            type: ScoreType,
            args: {id: {type: new GraphQLNonNull(GraphQLInt) }},
            resolve: async (parentValue, {id}) => {
                let queryText = `SELECT * FROM "scores" WHERE "id"=$1`;
                return await pool.query(queryText, [id])
                   .then(result => result.rows[0])
                   .catch(err => err);
            }
        },
    })
})

module.exports = RootQuery;