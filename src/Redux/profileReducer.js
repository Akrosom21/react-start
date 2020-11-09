import avatar001 from "../img/ava.jfif";
import avatar002 from "../img/ava002.jfif";
import {profileAPI} from "../API/api";

const addPost = 'ADD-POST';
const addSymbol = 'ADD-SYMBOL';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';

//Action Creators
export const addPostActionCreator = () => ({type: addPost});
export const addSymbolActionCreator = (postText) => ({type: addSymbol, inputSymbol: postText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status});

//Initial State
let initialState = {
    postData: [
        {message: "Hello", avatar: avatar001},
        {message: "It's my first post", avatar: avatar002},
        {message: "How's it going?", avatar: avatar001},
        {message: "Cool site!", avatar: avatar002},
    ],
    postSymbol: '',
    profile: null,
    profileStatus: 'initial status',
}

const profileReducer = (state = initialState, action) => {
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
    else if (action.type === SET_USER_PROFILE) {
        return {
            ...state,
            profile: action.profile
        }
    }
    else if (action.type === SET_PROFILE_STATUS) {
        return {
            ...state,
            profileStatus: action.status
        }
    }

    return stateCopy;
}

//Thunk
export const getProfile = (userID) => {
    return (dispatch) => {

        profileAPI.getProfile(userID)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export const setStatus = (userID) => {
    return (dispatch) => {
        profileAPI.getProfileStatus(userID)
            .then(status => {
                dispatch(setProfileStatus(status))
            })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateProfileStatus(status)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(setProfileStatus(status))
                }
            })
    }
}

export default profileReducer;