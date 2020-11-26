import React from "react";
import classes from "../ProfileInfo/ProfileInfo.module.css";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import Contacts from "../Contacts/Contacts";

function ProfileDescription(props) {
    const contact = Object.keys(props.profile.contacts).map(key =>
        <Contacts key={key} contactTitle={key} contactsValue={props.profile.contacts[key]}/>)
    const onProfileEdit = () => {
        props.editProfile(true)
    }
    return (
        <div className={classes.profile__desc}>
            <div className={classes.profile__name}>{props.profile.fullName}</div>
            <ProfileStatus profileStatus={props.profileStatus} updateStatus={props.updateStatus}/>
            <div className={classes.profile__desc_text}>
                <b>About Me:</b> <span>{props.profile.aboutMe}</span>
            </div>
            <div className={classes.profile__desc_text}>
                <b>Looking for a job:</b> <span>{props.profile.lookingForAJob ? 'Yes' : 'No'}</span>
            </div>
            <div className={classes.profile__desc_text}>
                <b>Looking for a job description:</b> <span>{props.profile.lookingForAJobDescription}</span>
            </div>
            <div className={classes.profile__desc_text}>
                <b>Contacts:</b> {contact}
            </div>
            {props.isOwner && <button onClick={onProfileEdit}>Change profile</button>}
        </div>
    )
}

export default ProfileDescription