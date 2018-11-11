const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = graphql;

const RoundType = new GraphQLObjectType({
  name:  'RoundType',
  fields: () => ({
    id: { type: GraphQLID },
    date_played: { type: GraphQLString },
    total_score: { type: GraphQLInt },
    person_id: {type: GraphQLInt},
    course_id: {type: GraphQLInt},
  })
});

module.exports = RoundType;