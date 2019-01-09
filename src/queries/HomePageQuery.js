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
    getCourses {
        name
        holes
        city
        id
    }
    getSumRoundsPerCourse {
        course_name
        count
    }
}
`;