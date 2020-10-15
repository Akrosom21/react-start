import React from "react";
import Post from "./Post/Post.jsx";
import classes from "./Posts.module.css";
import "../../App.css";
import {addPostActionCreator, addSymbolActionCreator} from "../../Redux/profileReducer"
import Posts from "./Posts";

function PostsContainer(props) {

    let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let changeSymbol = (postText) => {
    props.store.dispatch(addSymbolActionCreator(postText));
  }
debugger;
  return (
    <Posts addPost={addPost}
           changeSymbol={changeSymbol}
           postSymbol={state.profilePage.postSymbol}
           postDataArray={state.profilePage.postData} />
  );
}

export default PostsContainer;
