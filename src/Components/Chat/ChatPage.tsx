import React, {useEffect} from "react";
import {Chat} from "./Chat";
import {SendingForm} from "./SendingForm";
import {useDispatch, useSelector} from "react-redux";
import {connectChat, disconnectChat, sendMessage} from "../../Redux/chatReducer";
import {AppRootReducer} from "../../Redux/reduxStore";

const ChatPage = React.memo(function ChatPage() {
    let messages = useSelector((state: AppRootReducer) => state.chat.messages)
    let readyStatus = useSelector((state: AppRootReducer) => state.chat.readyStatus)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(connectChat())
        return () => {
            dispatch(disconnectChat())
        }
    },[])
    const onAddMessage = (message) => {
        // ws && ws.send(message)
        dispatch(sendMessage(message))
    }
    return (
        <div>
            <Chat messages={messages}/>
            <SendingForm onAddMessage={onAddMessage} readyStatus={readyStatus}/>
        </div>
    )
})

export default ChatPage