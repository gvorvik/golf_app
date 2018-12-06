import gql from 'graphql-tag';

export default gql`
mutation AddRound($date_played: String!, $total_score: Int!, $course_id: Int!, $scores: [ScoreInputType]){
    addRound(date_played: $date_played, total_score: $total_score, course_id: $course_id, scores: $scores){
        date_played
        total_score
        course_id
    }
}
`