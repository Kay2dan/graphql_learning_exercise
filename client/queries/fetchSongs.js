import gql from "graphql-tag";

const fetchSongs = gql`
   query{
      songs{
         id,
         title
      }
   }
`;

export default fetchSongs;