import React from "react";
import classes from "./Dialog.module.css";

function Dialog(props) {
  return <div className={classes.dialog__item}>{props.message}</div>;
}

export default Dialog;
