import React from "react";
import Post from "./Post/Post.jsx";
import classes from "./Posts.module.css";
import "../../App.css";
import {addPostActionCreator, addSymbolActionCreator} from "../../Redux/profileReducer"

function Posts(props) {

  let postElements = props.postDataArray.map((el) => (
    <Post message={el.message} avatar={el.avatar} />
  ));

  let getPostText = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let changeSymbol = () => {
    let postText = getPostText.current.value;
    props.dispatch(addSymbolActionCreator(postText));
  }

  return (
    <div className={classes.posts}>
      <div className={classes.posts__title}>My posts</div>
      <input ref={getPostText}
        onChange={changeSymbol}
        value={props.postSymbol}
        type="text"
        className={classes.posts__input}
        placeholder="your news..."
      />
      <button onClick={addPost} className={`${classes.send} btn`}>Send</button>
      {postElements}
    </div>
  );
}

export default Posts;
