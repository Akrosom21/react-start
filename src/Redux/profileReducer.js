import avatar001 from "../img/ava.jfif";
import avatar002 from "../img/ava002.jfif";

const addPost = 'ADD-POST';
const addSymbol = 'ADD-SYMBOL';
export const addPostActionCreator = () => ({type: addPost});
export const addSymbolActionCreator = (postText) => ({type: addSymbol, inputSymbol: postText});

let initialStore = {
    postData: [
        {message: "Hello", avatar: avatar001},
        {message: "It's my first post", avatar: avatar002},
        {message: "How's it going?", avatar: avatar001},
        {message: "Cool site!", avatar: avatar002},
    ],
    postSymbol: ''
}

const profileReducer = (state = initialStore, action) => {
    let stateCopy = {...state};

    if (action.type === addPost) {
        let newMessage = {
            message: state.postSymbol,
            avatar: avatar002
        }
        return {
            ...state,
            postData: [...state.postData, newMessage],
            postSymbol: '',
        }
    } else if (action.type === addSymbol) {
        return {
            ...state,
            postSymbol: action.inputSymbol,
        }
    }

    return stateCopy;
}

export default profileReducer;