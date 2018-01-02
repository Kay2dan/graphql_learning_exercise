import React, { Component } from "react";
import { graphql } from "react-apollo";
import likeLyric from "../mutations/likeLyric";

class LyricList extends Component{

   constructor(){
      super();
   }

   onClickHandler( id, likes ){
      console.log( "thumbUp clicked!", this.props );
      this.props.mutate({
         variables : { id },
         optimisticResponse : {
            __typename : "Mutation",
            likeLyric : {
               id,
               __typename : "LyricType",
               likes : likes + 1
            }
         }
      });
   }

   renderLyrics(){
      const { lyrics } = this.props;
      console.log( lyrics );
      return(
         lyrics.map(({ id, content, likes }) => {
            return(
               <li className = "collection-item"
                   key = { id }>
                  { content }
                  <div className = "vote-box">
                     <i className="material-icons"
                        onClick={() => this.onClickHandler( id, likes )}>
                        thumb_up
                     </i>
                     {likes}
                  </div>
               </li>);
         })
      );
   }

   render(){
      return(
         <ul>
            { this.renderLyrics() }
         </ul>
      );
   }

}

export default graphql( likeLyric )( LyricList );