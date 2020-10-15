import React from "react";
import User from "./User/User.jsx";
import Dialog from "./Dialog/Dialog.jsx";
import classes from "./Messages.module.css";
import {addDialogSymbolActionCreator, addDialogMessageActionCreator} from "../../Redux/messagesReduser";
import Messages from "./Messages";

function MessagesContainer(props) {

  let state = props.store.getState();

  let changeMessageText = (messageText) => {
   props.store.dispatch(addDialogSymbolActionCreator(messageText));
  }

  let sendMessage = () => {
    props.store.dispatch(addDialogMessageActionCreator());
  }

  return (
    <Messages sendMessage={sendMessage}
              changeMessageText={changeMessageText}
              userDataArray={state.messagesPage.userData}
              dialogSymbol={state.messagesPage.dialogSymbol}
              dialogDataArray={state.messagesPage.dialogData}
    />
  );
}

export default MessagesContainer;
