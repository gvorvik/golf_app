const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } = graphql;

const RoundInputType = new GraphQLObjectType({
  name:  'RoundInputType',
  fields: () => ({
    date_played: { type: new GraphQLNonNull(GraphQLString) },
    total_score: { type: new GraphQLNonNull(GraphQLInt) },
    course_id: { type: new GraphQLNonNull(GraphQLInt) }
  })
});

module.exports = RoundInputType;