const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = graphql;

const CourseType = new GraphQLObjectType({
  name:  'CourseType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    city: { type: GraphQLString },
    holes: {type: GraphQLInt},
    person_id: {type: GraphQLInt}
  })
});

module.exports = CourseType;