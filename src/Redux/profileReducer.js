import avatar001 from "../img/ava.jfif";
import avatar002 from "../img/ava002.jfif";
import {profileAPI} from "../API/api";

const addPost = 'profilePage/ADD-POST';
const addSymbol = 'profilePage/ADD-SYMBOL';
const SET_USER_PROFILE = 'profilePage/SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'profilePage/SET_PROFILE_STATUS';
const SET_PROFILE_PHOTO = 'profilePage/SET_PROFILE_PHOTO';
const EDIT_PROFILE = 'profilePage/EDIT_PROFILE';
const CHANGE_PROFILE_ERROR = 'profilePage/CHANGE_PROFILE_ERROR';

//Action Creators
export const addPostActionCreator = () => ({type: addPost});
export const addSymbolActionCreator = (postText) => ({type: addSymbol, inputSymbol: postText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status});
export const setProfilePhoto = (photo) => ({type: SET_PROFILE_PHOTO, photo});
export const editProfile = (edit) => ({type: EDIT_PROFILE, edit});
export const changeProfileError = (messages) => ({type: CHANGE_PROFILE_ERROR, messages});

//Initial State
let initialState = {
    postData: [
        {id: 1, message: "Hello", avatar: avatar001},
        {id: 2, message: "It's my first post", avatar: avatar002},
        {id: 3, message: "How's it going?", avatar: avatar001},
        {id: 4, message: "Cool site!", avatar: avatar002},
    ],
    postSymbol: '',
    profile: null,
    profileStatus: 'initial status',
    isEdit: false,
    changeProfileError: []
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
    } else if (action.type === SET_USER_PROFILE) {
        return {
            ...state,
            profile: action.profile
        }
    } else if (action.type === SET_PROFILE_STATUS) {
        return {
            ...state,
            profileStatus: action.status
        }
    } else if (action.type === SET_PROFILE_PHOTO) {
        return {
            ...state,
            profile: {...state.profile, photos: action.photo}
        }
    } else if (action.type === EDIT_PROFILE) {
        return {
            ...state,
            isEdit: action.edit
        }
    } else if (action.type === CHANGE_PROFILE_ERROR) {
        return {
            ...state,
            changeProfileError: action.messages
        }
    }
    return stateCopy;
}

//Thunk
export const getProfile = (userID) => {
    return async (dispatch) => {
        const data = await profileAPI.getProfile(userID)
        dispatch(setUserProfile(data))
    }
}

export const setStatus = (userID) => {
    return async (dispatch) => {
        const status = await profileAPI.getProfileStatus(userID)
        dispatch(setProfileStatus(status))
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        const response = await profileAPI.updateProfileStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setProfileStatus(status))
        }
    }
}

export const updatePhoto = (file) => {
    return async (dispatch) => {
        const response = await profileAPI.updateProfilePhoto(file)
        if (response.resultCode === 0) {
            dispatch(setProfilePhoto(response.data.photos))
        }
    }
}

export const changeProfile = (profile) => {
    return async (dispatch, getState) => {
        const response = await profileAPI.updateProfile(profile)
        const userID = getState().auth.authData.id
        if (response.resultCode === 0) {
            dispatch(getProfile(userID))
            dispatch(changeProfileError(response.messages))
        } else {
            dispatch(changeProfileError(response.messages))
        }
    }
}

export default profileReducer;