import React, {useEffect, useState} from "react";
import {Chat} from "./Chat";
import {SendingForm} from "./SendingForm";

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

function ChatPage() {
    type ChatMessagesType = {
        message: string,
        photo: string,
        userId: number,
        userName: string
    }
    const [messages, setMessages] = useState<ChatMessagesType[]>([])
    useEffect(() => {
        ws.addEventListener('message', (e) => {
            let newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        })
    }, [])
    const onAddMessage = (message) => {
        ws.send(message)
    }
    //Disable button till websocket will be ready
    const [readyStatus, setReadyStatus] = useState('')
    useEffect(() => {
         ws.addEventListener('open', () => {
             setReadyStatus('ready')
         })
    })
    return (
        <div>
            <Chat messages={messages}/>
            <SendingForm onAddMessage={onAddMessage} readyStatus={readyStatus}/>
        </div>
    )
}

export default ChatPage