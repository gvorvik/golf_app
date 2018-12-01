import gql from 'graphql-tag';

export default gql`
mutation AddScore($score: Int, $hole_id: Int, $round_id: Int){
    addScore(score: $score, hole_id: $hole_id, round_id: $round_id){
        score
        hole_id
        round_id
    }
}
`