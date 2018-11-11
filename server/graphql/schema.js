const graphql = require('graphql');
const {GraphQLSchema} = graphql;

const query = require('./root_query');
const mutation = require('./root_mutation');

module.exports = new GraphQLSchema({
    query,
    // mutation,
});