import gql from 'graphql-tag';

export default gql`
{
    getCourses {
        id
        name
        holes
        city
    }
}`;