const addDialogSymbol = 'ADD-DIALOG-SYMBOL';
const addDialogMessage = 'ADD-DIALOG-MESSAGE';
export const addDialogMessageActionCreator = () => ({type: addDialogMessage});
export const addDialogSymbolActionCreator = (messageText) => ({type: addDialogSymbol, inputDialogSymbol: messageText});

let initialStore = {
    dialogData: [
        {message: 'Hello'},
        {message: 'How are you?'},
        {message: 'Where are you from?'}
      ],
      dialogSymbol: '',
      userData: [
        {name: 'Andrey', id: 1},
        {name: 'Anna', id: 2},
        {name: 'Kiril', id: 3},
        {name: 'Sasha', id: 4}
      ]  
}

const messagesReducer = (state = initialStore, action) => {
    if (action.type === addDialogSymbol) {
        state.dialogSymbol = action.inputDialogSymbol;
    }
    else if (action.type === addDialogMessage) {
        state.dialogData.push({message: state.dialogSymbol});
        state.dialogSymbol = '';
    }
    return state;
}

export default messagesReducer;