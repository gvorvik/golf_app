import gql from 'graphql-tag';

export default gql`
query getCourseHoles($course_id: Int!)
{
    getHoles(course_id: $course_id){
        id
        holenumber
        yardage
        handicap
        par
    }
}
`