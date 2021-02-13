import React, {useEffect, useRef, useState} from "react";
import classes from '../Chat/Chat.module.css'

export const Chat = (props) => {
    const anchorRef = useRef(document.createElement("div"))
    const [isAutoScroll, setIsAutoScroll] = useState(true)
    const onScrollHandler = (e) => {
        const element = e.currentTarget
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) <300 ) {
            setIsAutoScroll(true)
        } else {
            setIsAutoScroll(false)
        }
    }
    useEffect(() => {
        if (isAutoScroll) {
            anchorRef.current.scrollIntoView({behavior: "smooth"})
        }
    }, [props.messages])
    return (
        <div className={classes.chat} onScroll={onScrollHandler}>
            {props.messages.map((message, index) => {
                return <div className={classes.chat__inner} key={index}>
                    <div className={classes.chat__user}>
                        <img className={classes.chat__img} src={message.photo} alt="avatar"/>
                        <div className={classes.chat__name}>{message.userName}</div>
                    </div>
                    <div className={classes.chat__text}>{message.message}</div>
                </div>
            })}
            <div ref={anchorRef}></div>
        </div>
    )
}