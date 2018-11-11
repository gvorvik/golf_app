const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLID } = graphql;
const ScoreType = require('./score_type');
const CourseType = require('./course_type');
const pool = require('./../../modules/pool');


const HoleType = new GraphQLObjectType({
    name: 'HoleType',
    fields: () => ({
        id: { type: GraphQLID },
        holenumber: { type: GraphQLInt },
        yardage: { type: GraphQLInt },
        handicap: { type: GraphQLInt },
        par: { type: GraphQLInt },
        course_id: { type: GraphQLInt },
        course: {
            type: CourseType,
            resolve: async (parentValue, args) => {
                let queryText = `SELECT * FROM "course" WHERE "id"=$1`;
                return await pool.query(queryText, [parentValue.course_id])
                   .then(result => result.rows[0])
                   .catch(err => err);
            } 
        },
        scores: {
            type: new GraphQLList(ScoreType),
            resolve: async (parentValue, args) => {
                let queryText = `SELECT * FROM "scores" WHERE "hole_id"=$1 ORDER BY "score"`;
                return await pool.query(queryText, [parentValue.id])
                   .then(result => result.rows)
                   .catch(err => err);
            }
        }
    })
});

module.exports = HoleType;