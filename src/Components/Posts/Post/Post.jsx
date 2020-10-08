import React from "react";
import classes from "./Post.module.css";

function Post(props) {
  return (
    <div className={classes.post}>
      <img src={props.avatar} alt="" className={classes.post__img} />
      <div className={classes.post__text}>{props.message}</div>
    </div>
  );
}

export default Post;
