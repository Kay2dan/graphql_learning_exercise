import React, { Component } from "react";
// import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";
import addSong from "../mutations/addSong";
import fetchSongs from "../queries/fetchSongs";



class SongCreate extends Component{

   constructor(){
      super();
      this.state = {
         title : ""
      };
      this.onSubmit = this.onSubmit.bind( this );
   }

   onSubmit( ev ){
      ev.preventDefault();
      this.props.mutate({
         variables : {
            title : this.state.title
         },
         refetchQueries : [{ 
            query : fetchSongs
         }]
      }).then(() => hashHistory.push( "/" ));
   }

   render(){
      return(
         <div>
            <Link className = ""
                  to = "/">
               Back
            </Link>
            <h3>Create A New Song</h3>
            <form onSubmit={this.onSubmit}>
               <label>Song Title: </label>
               <input onChange={(ev) => this.setState({ title: ev.target.value })}
                  value={this.state.title}/>
            </form>
         </div>
      );
   }
};

export default graphql( addSong )( SongCreate );