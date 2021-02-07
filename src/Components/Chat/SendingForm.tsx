import React, {useState} from "react";

export function SendingForm(props) {
    const [messageText, setMessageText] = useState('')
    const onMessageChange = (e) => {
        setMessageText(e.currentTarget.value)
    }
    const onAddMessage = () => {
        props.onAddMessage(messageText)
        setMessageText('')
    }
    return (
        <div>
            <textarea value={messageText} onChange={onMessageChange}></textarea>
            <button onClick={onAddMessage} disabled={!props.readyStatus}>Send</button>
        </div>
    )
}