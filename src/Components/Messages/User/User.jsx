import React from "react";
import classes from "./User.module.css";
import { NavLink } from "react-router-dom";

function User(props) {
  return (
    <div className={classes.user}>
      <NavLink
        to={"/messages/" + props.id}
        activeClassName={classes.messages__userLink_active}
        className={classes.userLink}
      >
        {props.name}
      </NavLink>
    </div>
  );
}

export default User;
