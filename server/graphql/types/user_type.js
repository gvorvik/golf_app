const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

const UserType = new GraphQLObjectType({
  name:  'UserType',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    first: { type: GraphQLString },
    last: {type: GraphQLString},
  })
});

module.exports = UserType;