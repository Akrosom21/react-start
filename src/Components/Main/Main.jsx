import React from "react";
import Menu from "../Menu/Menu.jsx";
import Profile from "../Profile/Profile.jsx";
import Messages from "../Messages/Messages.jsx";
import classes from "./Main.module.css";
import { Route } from "react-router-dom";
import MessagesContainer from "../Messages/MessagesContainer";

function Main(props) {
  return (
    <main className={classes.main}>
      <Menu />
      <div className="content">
        <Route
          path="/profile"
          render={() => <Profile
              store={props.store} />}
        />
        <Route
          path="/messages"
          render={() => (
            <MessagesContainer
                store={props.store}
            />
          )}
        />
      </div>
    </main>
  );
}

export default Main;
