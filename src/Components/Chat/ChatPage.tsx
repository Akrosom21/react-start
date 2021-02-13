import React, {useEffect, useState} from "react";
import {Chat} from "./Chat";
import {SendingForm} from "./SendingForm";

function ChatPage() {
    type ChatMessagesType = {
        message: string,
        photo: string,
        userId: number,
        userName: string
    }
    const [messages, setMessages] = useState<ChatMessagesType[]>([])
    const [ws, setWs] = useState<WebSocket | null> (null)
    //get messages
    useEffect(() => {
        let wsChanel: WebSocket
        const closeHandler = () => {
            console.log('close')
            setTimeout(createChanel, 3000)
            setReadyStatus('')
        }
        const getMessages = (e) => {
            let newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        }
        const createChanel = () => {
            wsChanel && wsChanel.removeEventListener('close', closeHandler)
            wsChanel && wsChanel.close()
            wsChanel && wsChanel.removeEventListener('message', getMessages)
            wsChanel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
            wsChanel.addEventListener('close', closeHandler)
            wsChanel.addEventListener('message', getMessages)
            setWs(wsChanel)
        }
        createChanel()
        return ()=> {
            wsChanel && wsChanel.removeEventListener('message', getMessages)
            wsChanel && wsChanel.removeEventListener('close', closeHandler)
            wsChanel && wsChanel.close()
        }
    }, [])

    //send new message
    const onAddMessage = (message) => {
        ws && ws.send(message)
    }

    //Disable button till websocket will be ready
    const [readyStatus, setReadyStatus] = useState('')
    useEffect(() => {
        function changeStatus() {
            setReadyStatus('ready')
        }
        ws && ws.addEventListener('open', changeStatus)

        return () => {
            ws && ws.removeEventListener('open', changeStatus)
        }
    }, [ws])

    //alert if connection was lost
    return (
        <div>
            <Chat messages={messages}/>
            <SendingForm onAddMessage={onAddMessage} readyStatus={readyStatus}/>
        </div>
    )
}

export default ChatPage