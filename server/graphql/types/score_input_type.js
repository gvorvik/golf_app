const graphql = require('graphql');
const { GraphQLInputObjectType, GraphQLInt, GraphQLNonNull} = graphql;

const ScoreInputType = new GraphQLInputObjectType({
    name: 'ScoreInputType',
    fields: () => ({
        score: { type: new GraphQLNonNull(GraphQLInt) },
        hole_id: { type: new GraphQLNonNull(GraphQLInt) },
    })
});

module.exports = ScoreInputType;