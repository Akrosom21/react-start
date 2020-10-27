import React from "react";
import classes from './Person.module.css'
import profileImg from '../../../img/profile.png'
import {NavLink} from "react-router-dom";
import {userAPI} from "../../../API/api";


function Person(props) {

    let follow = () => {
        props.disableBtn(true, props.userID)
        userAPI.follow(props.userID)
            .then(data => {
                if (data.resultCode === 0) {
                    props.follow(props.userID)
                }
                props.disableBtn(false,props.userID)
            })
    }
    let unfollow = () => {
        props.disableBtn(true, props.userID)
        userAPI.unfollow(props.userID)
            .then(data => {
                if (data.resultCode === 0) {
                    props.unfollow(props.userID)
                }
                props.disableBtn(false, props.userID)
            })
    }
    return (
        <div className="classes.person">
            <div className="classes.person__intro">
                <NavLink to={'/profile/' + props.userID} className="classes.person__link">
                    <img
                        src={props.photo != null ? props.photo : profileImg}
                        alt="profile" className="classes.person__img"/>
                </NavLink>
                { props.followed ?
                    <button disabled={props.isDisableBtn.some(id => id === props.userID)} onClick={unfollow} className="classes.follow_btn">UNFOLLOW</button> :
                    <button disabled={props.isDisableBtn.some(id => id === props.userID)} onClick={follow}  className="classes.follow_btn">FOLLOW</button>
                }
            </div>
            <div className="classes.person__main">
                <div className="classes.person__desc">
                    <div className="classes.person__name">{props.fullName}</div>
                    <div className="classes.person__status">{props.status}</div>
                </div>
                <div className="classes.person__location">
                    <span className="classes.person__country">{props.country}</span>
                    <span className="classes.person__city">{props.city}</span>
                </div>
            </div>
        </div>
    )
}

export default Person