import React from "react";
import classes from './Users.module.css'
import Person from "./Person/Person";
import Pagination from "react-js-pagination";

function Users(props) {

    let personal = props.usersArr.map((p) => (
        <Person key={p.id} userID={p.id} photo={p.photos.small} fullName={p.name} status={p.status}
                country={'p.location.country'} city={'p.location.city'} followed={p.followed}
                isDisableBtn={props.isDisableBtn}/>))
    return (
        <div className={classes.users}>
            <div className={classes.pagination}>
                <Pagination
                    activePage={props.currentPage}
                    itemsCountPerPage={props.usersInPage}
                    totalItemsCount={props.usersNumber}
                    pageRangeDisplayed={10}
                    onChange={props.onChangePage}
                    hideDisabled={true}
                    innerClass={classes.pagination__list}
                    activeClass={classes.active}
                />
            </div>
            <div className={classes.users__inner}>
                {personal}
            </div>
        </div>
    )
}

export default Users