const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } = graphql;

const CourseInputType = new GraphQLObjectType({
  name:  'CourseInputType',
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    city: { type: new GraphQLNonNull(GraphQLString) },
    holes: { type: new GraphQLNonNull(GraphQLInt) }
  })
});

module.exports = CourseInputType;