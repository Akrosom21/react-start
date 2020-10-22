import React from "react";
import classes from './Users.module.css'
import Person from "./Person/Person";

function Users(props) {
    let pages = Math.ceil(props.usersNumber / props.usersInPage)
    let pagesArr = []
    for (let i = 1; i <= pages; i++) {
        pagesArr.push(i)
    }

    let paginationItems = pagesArr.map(p => (
        <span onClick={() => props.onChangePage(p)}
                     className={props.currentPage === p && classes.pagination__current}>{p}</span>
    ))

    let personal = props.usersArr.map((p) => (
        <Person key={p.id} userID={p.id} photo={p.photos.small} fullName={p.name} status={p.status}
                country={'p.location.country'} city={'p.location.city'} followed={p.followed} follow={props.follow}
                unfollow={props.unfollow}/>))

    return (
        <div className={classes.users}>
            <div className={classes.pagination}>
                {paginationItems}
            </div>
            <div className={classes.users__inner}>
                {personal}
            </div>
        </div>
    )
}

export default Users