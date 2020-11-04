import React from "react";
import profileBg from "../../../img/profile_bg.webp";
import classes from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import profileImg from "../../../img/profile.png";
import ProfileStatus from "../ProfileStatus/ProfileStatus";


function ProfileInfo(props) {

    if (!props.profile) {
        return <Preloader/>
    }

    return (

        <div className={classes.profile}>
            <img
                src={profileBg}
                alt="profile_bg"
                className={classes.profile__bg_img}
            />
            <div className={classes.profile__info}>
                <img
                    src={props.profile.photos.small != null ? props.profile.photos.small : profileImg}
                    alt="profile"
                    className={classes.profile__photo}
                />
                <div className={classes.profile__desc}>
                    <div className={classes.profile__name}>{props.profile.fullName}</div>
                    <ProfileStatus status={'Hello!!!'}/>
                    <div className={classes.profile__desc_text}>
                        About Me: <span>{props.profile.aboutMe}</span>
                    </div>
                    <div className={classes.profile__desc_text}>
                        City: <span>New York</span>
                    </div>
                    <div className={classes.profile__desc_text}>
                        Education: <span>NYC</span>
                    </div>
                    <div className={classes.profile__desc_text}>
                        Web Site:{" "}
                        <span>
                <a href={props.profile.website}>{props.profile.website}</a>
              </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
