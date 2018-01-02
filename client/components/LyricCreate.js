import React, { Component } from "react";
import addLyricToSong from "../mutations/addLyricToSong";
import { graphql } from "react-apollo";

class LyricCreate extends Component{

   constructor(){
      super();
      this.state = {
         lyric : ""
      };
      this.onSubmitHandler = this.onSubmitHandler.bind( this );
   }

   onSubmitHandler( ev ){
      ev.preventDefault();
      // console.log( "lyric create...", this.props.songId, this.state.lyric, this.props.mutate );
      this.props.mutate({
         variables : {
            id : this.props.songId,
            content : this.state.lyric 
         }
      }).then(() => this.setState({ lyric : "" }));
   }

   render(){
      return(
         <form onSubmit={ ev => this.onSubmitHandler( ev )}>
            <label>Add a lyric</label>
            <input value = { this.state.lyric }
                   onChange = { ev => this.setState({
                     lyric : ev.target.value
                   })}/> 
         </form>
      );
   }
}

export default graphql( addLyricToSong )( LyricCreate );