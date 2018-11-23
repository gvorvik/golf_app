import gql from 'graphql-tag';

export default gql`
    query GetRoundsByCourse ($course_id: Int!) {
        getRoundsByCourse(course_id: $course_id) {
            id
            date_played
            total_score
        }
    }
`;