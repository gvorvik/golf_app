const graphql = require('graphql');
const { GraphQLObjectType, GraphQLInt, GraphQLID } = graphql;
const pool = require('./../../modules/pool');

const ScoreType = new GraphQLObjectType({
  name: 'ScoreType',
  fields: () => ({
    id: { type: GraphQLID },
    score: { type: GraphQLInt },
    hole_id: { type: GraphQLInt },
    round_id: { type: GraphQLInt },
    round_info: {
      type: require('./round_type'),
      resolve: async (parentValue) => {
        let queryText = `SELECT * FROM "round" WHERE "id"=$1`;
        return await pool.query(queryText, [parentValue.round_id])
          .then(result => result.rows[0])
          .catch(err => err);
      }
    },
    hole_info: {
      type: require('./hole_type'),
      resolve: async (parentValue) => {
        let queryText = `SELECT * FROM "hole" WHERE "id"=$1`;
        return await pool.query(queryText, [parentValue.hole_id])
          .then(result => result.rows[0])
          .catch(err => err);
      }
    }
  })
});

module.exports = ScoreType;