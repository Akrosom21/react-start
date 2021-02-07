import React, {useEffect, useState} from "react";
import {Chat} from "./Chat";
import {SendingForm} from "./SendingForm";

function ChatPage() {
    const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    type ChatMessagesType = {
        message: string,
        photo: string,
        userId: number,
        userName: string
    }
    const [messages, setMessages] = useState<ChatMessagesType[]>([])
    //get messages
    useEffect(() => {
        const getMessages = (e) => {
            let newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        }
        ws.addEventListener('message', getMessages)

        return ()=> {
            ws.removeEventListener('message', getMessages)
            ws.close()
        }
    }, [])

    //send new message
    const onAddMessage = (message) => {
        ws.send(message)
    }

    //Disable button till websocket will be ready
    const [readyStatus, setReadyStatus] = useState('')
    useEffect(() => {
        function changeStatus() {
            setReadyStatus('ready')
        }
         ws.addEventListener('open', changeStatus)

        return () => {
            ws.removeEventListener('open', changeStatus)
        }
    }, [])

    //alert if connection was lost
    useEffect(()=> {
        ws.addEventListener('close', ()=> alert('connection was lost'))
    }, [])
    return (
        <div>
            <Chat messages={messages}/>
            <SendingForm onAddMessage={onAddMessage} readyStatus={readyStatus}/>
        </div>
    )
}

export default ChatPage