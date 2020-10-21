import "../../App.css";
import {addPostActionCreator, addSymbolActionCreator} from "../../Redux/profileReducer"
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postSymbol: state.profilePage.postSymbol,
        postDataArray: state.profilePage.postData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        changeSymbol: (postText) => {
            dispatch(addSymbolActionCreator(postText));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
