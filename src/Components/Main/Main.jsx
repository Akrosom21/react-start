import React from "react";
import Menu from "../Menu/Menu.jsx";
import Profile from "../Profile/Profile.jsx";
import classes from "./Main.module.css";
import {Route} from "react-router-dom";
import MessagesContainer from "../Messages/MessagesContainer";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";

function Main(props) {
    return (
        <main className={classes.main}>
            <Menu/>
            <div className="content">
                <Route
                    path="/profile"
                    render={() => <ProfileContainer/>}
                />
                <Route
                    path="/messages"
                    render={() => (
                        <MessagesContainer/>
                    )}
                />
                <Route path='/users' render={() => (<UsersContainer/>)}/>
            </div>
        </main>
    );
}

export default Main;
