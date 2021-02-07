import React from "react";
import Menu from "../Menu/Menu.jsx";
import classes from "./Main.module.css";
import {Route, Switch} from "react-router-dom";
import UsersContainer from "../Users/UsersContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import Login from "../Login/Login";
import {withSuspense} from "../../HOC/withSuspense";

const MessagesContainer = React.lazy(() => import('../Messages/MessagesContainer'));
const ChatPage = React.lazy(() => import('../Chat/ChatPage'));

function Main(props) {
    return (
        <main className={classes.main}>
            <Menu/>
            <div className="content">
                <Switch>
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
                    <Route
                        path="/chat"
                        render={(withSuspense(ChatPage))}
                    />
                    <Route path='/users' render={() => (<UsersContainer/>)}/>
                    <Route path='/login' render={() => (<Login/>)}/>
                    <Route render={() => (<div>404 Not Found</div>)}/>
                </Switch>
            </div>
        </main>
    );
}

export default Main;
