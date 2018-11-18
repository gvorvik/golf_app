import gql from 'graphql-tag';

export default gql`
{
    getCourses {
        name
        holes
        city
    }
}
`;