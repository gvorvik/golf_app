import gql from 'graphql';

export default gql`
mutation AddCourse($name: String, $city: String, $holes: Int, $course_id: Int){
    addCourse(name: $name, city: $city, hole: $holes){
        name
        city
        holes
    }

    addHole(holenumber: $holenumber, yardage: $yardage, handicap: $handicap, par: $par, course_id: $course_id){
        holenumber
        yardage
        handicap
        par
    }
}
`