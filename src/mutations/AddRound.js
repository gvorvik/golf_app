import gql from 'graphql';

export default gql`
mutation AddRound($date_played: String, $total_score: Int, $person_id: Int, $course_id: Int){
    addRound(date_played: $date_played, total_score: $total_score, person_id: $person_id, course_id: $course_id){
        date_played
        total_score
        person_id
        course_id
    }
}
`