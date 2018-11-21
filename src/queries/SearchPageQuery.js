import gql from 'graphql-tag';

export default gql`
query SearchPageQuery($hole_id: Int!)
{
    getCourses {
        name
        holes
        city
    },

    getHole(hole_id: $hole_id) {
        id
        holenumber
        yardage
        par
        handicap
        course_id
        course {
            name
        }
        scores {
            score
            round_info {
                date_played
            }
        }
    }
}
`;