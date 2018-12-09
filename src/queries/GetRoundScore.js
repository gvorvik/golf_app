import gql from 'graphql-tag';

export default gql`
    query GetScoresForRound ($round_id: Int!) {
        getRoundScores(round_id: $round_id) {
            id
            score
            hole_info {
                holenumber
                yardage
                par
                handicap
            }
        }
    }
`;