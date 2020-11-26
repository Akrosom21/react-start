import React, {useEffect} from "react";
import profileBg from "../../../img/profile_bg.webp";
import classes from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import profileImg from "../../../img/profile.png";
import ProfileDescription from "../ProfileDescription/ProfileDescription";
import ProfileDescriptionForm from "../ProfileDescription/ProfileDescriptionForm";


function ProfileInfo(props) {

    const onPhotoUpdate = (e) => {
        if (e.target.files.length) {
            props.updatePhoto(e.target.files[0])
        }
    }

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
                <div className={classes.profile__avatar}>
                    <img
                        src={props.profile.photos.small != null ? props.profile.photos.small : profileImg}
                        alt="profile"
                        className={classes.profile__photo}
                    />
                    {props.isOwner && <input onChange={onPhotoUpdate} type="file"/>}
                </div>
                {props.isEdit
                    ?
                    <ProfileDescriptionForm profile={props.profile}
                                            profileStatus={props.profileStatus}
                                            updateStatus={props.updateStatus}
                                            changeProfile={props.changeProfile}
                                            editProfile={props.editProfile}
                                            changeProfileError={props.changeProfileError}
                    />
                    :
                    <ProfileDescription profile={props.profile}
                                        isOwner={props.isOwner}
                                        profileStatus={props.profileStatus}
                                        updateStatus={props.updateStatus}
                                        editProfile={props.editProfile}
                    />}
            </div>
        </div>
    );
}

export default ProfileInfo;
