const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = graphql;
const CourseType = require('./course_type');
const pool = require('./../../modules/pool');

const RoundType = new GraphQLObjectType({
  name:  'RoundType',
  fields: () => ({
    id: { type: GraphQLID },
    date_played: { type: GraphQLString },
    total_score: { type: GraphQLInt },
    person_id: {type: GraphQLInt},
    course_id: {type: GraphQLInt},
    course: {
      type: CourseType,
      resolve: async (parentValue, args) => {
          let queryText = `SELECT * FROM "course" WHERE "id"=$1`;
          return await pool.query(queryText, [parentValue.course_id])
             .then(result => result.rows[0])
             .catch(err => err);
      } 
    }
  })
});

module.exports = RoundType;