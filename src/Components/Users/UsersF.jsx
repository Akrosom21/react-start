import React from "react";
import classes from './Users.module.css'
import Person from "./Person/Person";
import * as axios from "axios";

function Users(props) {

    let getUsers = () => {
        if (props.usersArr.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items)
                })
        }
    }



    let personElement = props.usersArr.map((p) => (<Person key={p.id} userID={p.id} photo={p.photos.small} fullName={p.name} status={p.status} country={'p.location.country'} city={'p.location.city'} followed={p.followed} follow={props.follow} unfollow={props.unfollow}/>))
    return (
            <div className="classes.users">
                <button onClick={getUsers}>Get users</button>
                <div className="classes.users__inner">
                    {personElement}
                </div>
            </div>
    )
}

export default Users