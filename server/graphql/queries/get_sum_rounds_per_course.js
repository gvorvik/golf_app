const graphql = require('graphql');
const { GraphQLList } = graphql;
const RoundsByCourseType = require('./../types/rounds_by_course_type');
const pool = require('./../../modules/pool');

module.exports = {
    type: new GraphQLList(RoundsByCourseType),
    args: {},
    resolve: async (parentValue, args, context) => {
        let queryText = `SELECT "course"."name" AS "course_name", COUNT(*)
        FROM "round" JOIN "course" ON "round"."course_id"="course"."id"
        WHERE "round"."person_id" = $1
        GROUP BY "course"."name"
        ORDER BY "count"
        DESC
        LIMIT 5`;
        return await pool.query(queryText, [context.user.id])
           .then(result =>  result.rows)
           .catch(err => err);
    }
}