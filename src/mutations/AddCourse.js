import gql from 'graphql-tag';

export default gql`
mutation AddCourse($name: String!, $city: String!, $holes: Int!, $holeInformation: [HoleInputType]!){
    addCourse(name: $name, city: $city, holes: $holes, holeInformation: $holeInformation){
        name
        city
        holes
    }
}
`