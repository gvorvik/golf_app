import gql from 'graphql-tag';

export default gql`
{
    getAllRounds {
        id
        date_played
        total_score
        course {
            name
        }
    }
    getSumRoundsPerCourse {
        course_name
        count
    }
}
`;