import React from "react";
import classes from "./Profile.module.css";
import PostsContainer from "../Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


function Profile(props) {

    return (
        <div className={classes.content}>
            <ProfileInfo updatePhoto={props.updatePhoto}
                         profile={props.profile}
                         profileStatus={props.profileStatus}
                         updateStatus={props.updateStatus}
                         isOwner={props.isOwner}
                         isEdit={props.isEdit}
                         editProfile={props.editProfile}
                         changeProfile={props.changeProfile}
                         changeProfileError={props.changeProfileError}
            />
            <PostsContainer/>
        </div>
    );
}

export default Profile;
