const graphql = require('graphql');
const { GraphQLInt, GraphQLString, GraphQLNonNull } = graphql;
const UserType = require('../types/user_type');

module.exports = {
    type: UserType,
    args: {
      username: { type: new GraphQLNonNull(GraphQLInt) },
      first: {type: new GraphQLNonNull(GraphQLInt)},
      last: {type: new GraphQLNonNull(GraphQLInt)}
    },
    resolve(parentValue, { username, password, hole_id,  }) {
      let queryText = `INSERT INTO "scores" ("score", "hole_id", "round_id")
      VALUES ($1, $2, $3);`;
      pool.query(queryText, [score, hole_id, round_id])
      .then(response => response)
      .catch(err => err);
    }
}