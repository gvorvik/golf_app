const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

const RoundByCourseType = new GraphQLObjectType({
  name:  'RoundByCourseType',
  fields: () => ({
    course_name: { type: GraphQLString },
    count: { type: GraphQLInt },
  })
});

module.exports = RoundByCourseType;