import {addDialogSymbolActionCreator, addDialogMessageActionCreator} from "../../Redux/messagesReduser";
import Messages from "./Messages";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        userDataArray: state.messagesPage.userData,
        dialogSymbol: state.messagesPage.dialogSymbol,
        dialogDataArray: state.messagesPage.dialogData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(addDialogMessageActionCreator());
        },
        changeMessageText: (messageText) => {
            dispatch(addDialogSymbolActionCreator(messageText));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
