import React from "react";
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
