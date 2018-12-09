import gql from 'graphql-tag';

export default gql`
    query MyScoresQuery ($id: Int!) {
        getCourses {
            name
            holes
            city
            id
        },
        getScore(id: $id) {
            id
            score
            hole_id
        }
    }
`;