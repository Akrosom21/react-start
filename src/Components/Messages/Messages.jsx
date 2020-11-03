import React from "react";
import User from "./User/User.jsx";
import Dialog from "./Dialog/Dialog.jsx";
import classes from "./Messages.module.css";
import {Redirect} from "react-router-dom";

function Messages(props) {
    let userElements = props.userDataArray.map((el) => (
        <User name={el.name} id={el.id}/>
    ));

    let dialogElements = props.dialogDataArray.map((el) => (
        <Dialog message={el.message}/>
    ));

    let changeMessageText = (e) => {
        let messageText = e.target.value;
        props.changeMessageText(messageText);
    }

    let sendMessage = () => {
        props.sendMessage();
    }

    if(!props.resultCode) return <Redirect to='/login'/>
    return (
        <div>
            <div className={classes.content__title}>Messages</div>
            <div className={classes.messages__inner}>
                <div className={classes.messages__users}>{userElements}</div>
                <div className={classes.dialog}>
                    {dialogElements}
                    <div className="send_block">
                        <textarea value={props.dialogSymbol} onChange={changeMessageText}></textarea>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Messages;
