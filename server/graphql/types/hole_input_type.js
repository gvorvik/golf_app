const graphql = require('graphql');
const { GraphQLInputObjectType, GraphQLInt, GraphQLNonNull} = graphql;

const HoleInputType = new GraphQLInputObjectType({
    name: 'HoleInputType',
    fields: () => ({
        holeNumber: { type: new GraphQLNonNull(GraphQLInt) },
        yardage: { type: new GraphQLNonNull(GraphQLInt) },
        handicap: { type: new GraphQLNonNull(GraphQLInt) },
        par: { type: new GraphQLNonNull(GraphQLInt) }
    })
});

module.exports = HoleInputType;