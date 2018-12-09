import gql from 'graphql-tag';

export default gql`
    query MyCoursesQuery ($course_id: Int!) {
        getCourses {
            name
            holes
            city
            id
        },
        getHoles(course_id: $course_id) {
            id
            holenumber
            yardage
            handicap
            par
        }
    }
`;
