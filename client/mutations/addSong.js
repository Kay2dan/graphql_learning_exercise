import gql from "graphql-tag";

const addSong = gql`
   mutation addSong( $title : String ){
      addSong( title : $title ){
         title
      }
   }
`;

export default addSong;