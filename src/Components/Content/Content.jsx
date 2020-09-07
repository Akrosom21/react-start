import React from 'react';
import profileBg from '../../img/profile_bg.webp';
import profilePhoto from '../../img/profile.png';
import classes from './Content.module.css';
import Posts from '../Posts/Posts.jsx';

function Content() {
    return (
        <div className={classes.content}>
          <div className={classes.profile}>
            <img src={profileBg} alt="profile_bg" className={classes.profile__bg_img} />
            <div className={classes.profile__info}>
              <img src={profilePhoto} alt="photo" className={classes.profile__photo} />
              <div className={classes.profile__desc}>
                <div className={classes.profile__name}>Max R.</div>
                <div className={classes.profile__desc_text}>Date of Birth: <span>11 May</span></div>
                <div className={classes.profile__desc_text}>City: <span>New York</span></div>
                <div className={classes.profile__desc_text}>Education: <span>NYC</span></div>
                <div className={classes.profile__desc_text}>Web Site: <span><a href="#">google.com</a></span></div>
              </div>
            </div>
          </div>
          <Posts />
        </div>
    )
}

export default Content;