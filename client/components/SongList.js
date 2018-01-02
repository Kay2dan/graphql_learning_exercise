import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
// import gql from "graphql-tag";
import fetchSongs from "../queries/fetchSongs";
import deleteSong from "../mutations/deleteSong";


class SongList extends Component{

   onSongDelete( id ){
      this.props.mutate({
         variables : { id }
      }).then(() => this.props.data.refetch());
   }

   renderSongs(){
      return(
         this.props.data.songs.map(({ id, title }) => {            
            return(
               <li className = "collection-item"
                   key = { id }>
                  <Link to = { `/song/${ id }` }>
                  { title }
                  </Link>
                  <i className = "material-icons right"
                     key = { `del${ id }` }
                     onClick = {() => this.onSongDelete( id )}>
                     delete
                  </i>
               </li>
            );
         })
      );
   }

   render(){
      return(
         <div>
            <ul className="collection">
               {this.props.data.loading ? <div> loading... </div> :
                  this.renderSongs() }
            </ul>
            <Link className = "btn-floating btn-large red right"
                  to = "/songs/new" >
               <i className = "material-icons">
                  add
               </i>
            </Link>
         </div>
      );
   }
}

export default graphql( deleteSong )( graphql( fetchSongs )( SongList ));