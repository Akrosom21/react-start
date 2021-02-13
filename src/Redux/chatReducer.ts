import {authAPI, captchaAPI} from "../API/api";
import {authDataType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppRootReducer} from "./reduxStore";
import {chatAPI} from "../API/chat-api";

const ADD_MESSAGES = 'chat/ADD_MESSAGES';
const SET_READY_STATUS = 'chat/SET_READY_STATUS';

//Action Creators
type ChatMessagesType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}
type addMessagesType = {
    type: typeof ADD_MESSAGES,
    messages: Array<ChatMessagesType>
}
export const addMessages = (messages): addMessagesType => ({type: ADD_MESSAGES, messages});
type setReadyStatusType = {
    type: typeof SET_READY_STATUS,
    isReady: boolean
}
export const setReadyStatus = (isReady: boolean): setReadyStatusType => ({type: SET_READY_STATUS, isReady})
type actionType = addMessagesType | setReadyStatusType
//Initial State
let initialState = {
    messages: [] as Array<ChatMessagesType>,
    readyStatus: false
}

type InitialState = typeof initialState

const chatReducer = (state = initialState, action: actionType): InitialState => {
    let stateCopy = {...state};
    if (action.type === ADD_MESSAGES) {
        return {
            ...state,
            messages: [...state.messages, ...action.messages] as Array<ChatMessagesType>
        }
    } else if (action.type === SET_READY_STATUS) {
        return {
            ...state,
            readyStatus: action.isReady
        }
    }
    return stateCopy;
}

//Thunk
export const connectChat = () => {
    return (dispatch) => {
        const getMessages = (e)  => {
            let newMessages = JSON.parse(e.data)
            dispatch(addMessages(newMessages))
        }
        const changeStatus = () => {
            dispatch(setReadyStatus(true))
            console.log('open')
        }
        const closeHandler = () => {
            dispatch(setReadyStatus(false))
            console.log('close')
            setTimeout(connectChat, 3000)
        }

        chatAPI.createChanel(getMessages, changeStatus, closeHandler)
    }
}
export const sendMessage = (message) => {
    return (dispatch) => {
        chatAPI.send(message)
    }
}
export const disconnectChat = () => {
    return (dispatch) => {
        const getMessages = (e)  => {
            let newMessages = JSON.parse(e.data)
            dispatch(addMessages(newMessages))
        }
        const changeStatus = () => {
            dispatch(setReadyStatus(true))
            console.log('open')
        }
        const closeHandler = () => {
            dispatch(setReadyStatus(false))
            console.log('close')
            setTimeout(connectChat, 3000)
        }
        chatAPI.disconnect(getMessages, changeStatus, closeHandler)
    }
}

export default chatReducer;