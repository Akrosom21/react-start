import React from "react";
import Menu from "../Menu/Menu.jsx";
import Profile from "../Profile/Profile.jsx";
import Messages from "../Messages/Messages.jsx";
import classes from "./Main.module.css";
import { Route } from "react-router-dom";

function Main(props) {
  return (
    <main className={classes.main}>
      <Menu />
      <div className="content">
        <Route
          path="/profile"
          render={() => <Profile 
          postData={props.postData} 
          postSymbol={props.postSymbol}
          dispatch={props.dispatch} />}
        />
        <Route
          path="/messages"
          render={() => (
            <Messages
              userDataArray={props.userData}
              dialogDataArray={props.dialogData}
              dialogSymbol={props.dialogSymbol}
              dispatch={props.dispatch}
            />
          )}
        />
      </div>
    </main>
  );
}

export default Main;
