import React from "react";
import profileBg from "../../img/profile_bg.webp";
import profilePhoto from "../../img/profile.png";
import classes from "./Profile.module.css";
import PostsContainer from "../Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


function Profile(props) {

    return (
        <div className={classes.content}>
            <ProfileInfo profile={props.profile}/>
            <PostsContainer/>
        </div>
    );
}

export default Profile;
