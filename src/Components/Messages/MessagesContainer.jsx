import {addDialogSymbolActionCreator, addDialogMessageActionCreator} from "../../Redux/messagesReduser";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        userDataArray: state.messagesPage.userData,
        dialogSymbol: state.messagesPage.dialogSymbol,
        dialogDataArray: state.messagesPage.dialogData,
        resultCode: state.auth.resultCode
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages)
