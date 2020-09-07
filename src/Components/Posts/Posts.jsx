import React from 'react';
import Post from './Post/Post.jsx'
import classes from './Posts.module.css';
import '../../App.css';

function Posts() {
    return (
        <div className={classes.posts}>
          <div className={classes.posts__title}>My posts</div>
          <input type="text" className={classes.posts__input} placeholder="your news..."/>
          <button className={`${classes.send} btn`}>Send</button>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
    )
}

export default Posts;