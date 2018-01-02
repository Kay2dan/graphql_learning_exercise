import gql from "graphql-tag";

const addLyricToSong = gql`
   mutation AddLyricToSong($id : ID!, $content : String){
      addLyricToSong( songId : $id,
                      content : $content ){
         id, lyrics {
            id,
            content,
            likes
         }
      }
   }
`;

export default addLyricToSong;