import React from "react";
import Menu from "../Menu/Menu.jsx";
import classes from "./Main.module.css";
import {Route} from "react-router-dom";
import MessagesContainer from "../Messages/MessagesContainer";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import Login from "../Login/Login";

function Main(props) {
    return (
        <main className={classes.main}>
            <Menu/>
            <div className="content">
                <Route
                    path="/profile/:userID?"
                    render={() => <ProfileContainer/>}
                />
                <Route
                    path="/messages"
                    render={() => (
                        <MessagesContainer/>
                    )}
                />
                <Route path='/users' render={() => (<UsersContainer/>)}/>
                <Route path='/login' render={() => (<Login/>)}/>
            </div>
        </main>
    );
}

export default Main;
