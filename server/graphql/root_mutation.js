const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

const addRound = require('./mutations/add_round');
const addCourse = require('./mutations/add_course');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
      addRound,
      addCourse
  }
});

module.exports = mutation;