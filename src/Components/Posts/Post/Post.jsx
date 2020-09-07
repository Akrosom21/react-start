import React from 'react';
import classes from './Post.module.css';
import avatar from '../../../img/ava.jfif';

function Post() {
    return (
        <div className={classes.post}>
          <img src={avatar} alt="" className={classes.post__img} />
          <div className={classes.post__text}>Hello</div>
        </div>
    )
}

export default Post;