import React from "react";
import classes from './Users.module.css'
import Person from "./Person/Person";
import * as axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return (
            <div className="classes.users">
                <div className="classes.users__inner">
                    {this.props.usersArr.map((p) => (
                        <Person key={p.id} userID={p.id} photo={p.photos.small} fullName={p.name} status={p.status} country={'p.location.country'} city={'p.location.city'} followed={p.followed} follow={this.props.follow} unfollow={this.props.unfollow}/>))}
                </div>
            </div>
        )
    }
}

export default Users