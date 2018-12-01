import gql from 'graphql-tag';

export default gql`
mutation AddHole($holenumber: Int, $yardage: Int, $handicap: Int, $par: Int){
    addHole(holenumber: $holenumber, yardage: $yardage, handicap: $handicap, par: $par){
        holenumber
        yardage
        handicap
        par
    }
}
`