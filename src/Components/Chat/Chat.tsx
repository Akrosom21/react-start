import React, {useEffect, useState} from "react";
import classes from '../Chat/Chat.module.css'

export function Chat(props) {
    return (
        <div className={classes.chat}>
            {props.messages.map((message, index) => {
                return <div className={classes.chat__inner} key={index}>
                    <div className={classes.chat__user}>
                        <img className={classes.chat__img} src={message.photo} alt="avatar"/>
                        <div className={classes.chat__name}>{message.userName}</div>
                    </div>
                    <div className={classes.chat__text}>{message.message}</div>
                </div>
            })}
        </div>
    )
}