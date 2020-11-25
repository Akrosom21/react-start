import React from "react";
import Menu from "../Menu/Menu.jsx";
import classes from "./Main.module.css";
import {Route} from "react-router-dom";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import Login from "../Login/Login";
import {withSuspense} from "../../HOC/withSuspense";
const MessagesContainer = React.lazy(() => import('../Messages/MessagesContainer'));

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
                    exact path="/"
                    render={() => <ProfileContainer/>}
                />
                <Route
                    path="/messages"
                    render={(withSuspense(MessagesContainer))}
                />
                <Route path='/users' render={() => (<UsersContainer/>)}/>
                <Route path='/login' render={() => (<Login/>)}/>
            </div>
        </main>
    );
}

export default Main;
