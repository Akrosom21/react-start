import React from "react";
import classes from './Users.module.css'
import Person from "./Person/Person";
import * as axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersInPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersNumber(response.data.totalCount)
            });
    }

    onChangePage = (page) => {
        this.props.changePage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersInPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersNumber(response.data.totalCount)
            });
    }

    render() {
        let pages = Math.ceil(this.props.usersNumber / this.props.usersInPage)
        let pagesArr = []
        for (let i = 1; i <= pages; i++) {
            pagesArr.push(i)
        }

        return (
            <div className="classes.users">
                <div className="classes.pagination">
                    {
                        pagesArr.map(p => {
                            return <span onClick={() => this.onChangePage(p)} className={this.props.currentPage === p && classes.pagination__current}>{p}</span>
                        })
                    }
                </div>
                <div className="classes.users__inner">
                    {this.props.usersArr.map((p) => (
                        <Person key={p.id} userID={p.id} photo={p.photos.small} fullName={p.name} status={p.status} country={'p.location.country'} city={'p.location.city'} followed={p.followed} follow={this.props.follow} unfollow={this.props.unfollow}/>))}
                </div>
            </div>
        )
    }
}

export default Users