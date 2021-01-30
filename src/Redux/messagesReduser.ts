import { dialogDataType, dialogUserDataType } from "../types/types";

const dialogSymbol = 'messagesPage/ADD-DIALOG-SYMBOL';
const dialogMessage = 'messagesPage/ADD-DIALOG-MESSAGE';

//Action creators
type addDialogMessageType = {
    type: typeof dialogMessage
}
export const addDialogMessage = (): addDialogMessageType => ({type: dialogMessage});
type addDialogSymbolType = {
    type: typeof dialogSymbol
    inputDialogSymbol: string
}
export const addDialogSymbol = (messageText: string): addDialogSymbolType => ({type: dialogSymbol, inputDialogSymbol: messageText});
type actionType = addDialogMessageType | addDialogSymbolType
let initialState = {
    dialogData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Where are you from?'}
    ] as Array<dialogDataType>,
    dialogSymbol: '' as string,
    userData: [
        {name: 'Andrey', id: 1},
        {name: 'Anna', id: 2},
        {name: 'Kiril', id: 3},
        {name: 'Sasha', id: 4}
    ] as Array<dialogUserDataType>
}

type InitialState = typeof initialState

const messagesReducer = (state = initialState, action: actionType): InitialState => {
    let stateCopy = {...state};
    if (action.type === dialogSymbol) {
        return {
            ...state,
            dialogSymbol: action.inputDialogSymbol,
        }
    } else if (action.type === dialogMessage) {
        const newMessage = {
            id: state.dialogData[state.dialogData.length - 1].id + 1,
            message: stateCopy.dialogSymbol
        }
        return {
            ...state,
            dialogData: [...state.dialogData, newMessage],
            dialogSymbol: '',
        }
    }
    return stateCopy;
}

export default messagesReducer;