import React from "react";
import classes from './Person.module.css'
import profileImg from '../../../img/profile.png'


function Person(props) {

    let follow = () => {
        props.follow(props.userID)
    }
    let unfollow = () => {
        props.unfollow(props.userID)
    }
    return (
        <div className="classes.person">
            <div className="classes.person__intro">
                <a href="#" className="classes.person__link">
                    <img
                        src={props.photo != null ? props.photo : profileImg}
                        alt="photo" className="classes.person__img"/>
                </a>
                { props.followed ?
                    <button onClick={follow} className="classes.follow_btn">FOLLOW</button> :
                    <button onClick={unfollow} className="classes.follow_btn">UNFOLLOW</button>
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