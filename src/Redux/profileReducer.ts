import {profileAPI} from "../API/api";
import { profile, photos } from "../types/types";
import {ThunkAction} from "redux-thunk";
import { AppRootReducer } from "./reduxStore";
const avatar001 = require("../img/ava.jfif");
const avatar002 = require("../img/ava002.jfif");

const ADD_POST = 'profilePage/ADD_POST';
const ADD_SYMBOL = 'profilePage/ADD_SYMBOL';
const SET_USER_PROFILE = 'profilePage/SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'profilePage/SET_PROFILE_STATUS';
const SET_PROFILE_PHOTO = 'profilePage/SET_PROFILE_PHOTO';
const EDIT_PROFILE = 'profilePage/EDIT_PROFILE';
const CHANGE_PROFILE_ERROR = 'profilePage/CHANGE_PROFILE_ERROR';

//Action Creators
type addPostActionCreatorType = {
    type: typeof ADD_POST
}
export const addPostActionCreator = (): addPostActionCreatorType => ({type: ADD_POST});
type addSymbolActionCreatorType = {
    type: typeof ADD_SYMBOL
    inputSymbol: string
}
export const addSymbolActionCreator = (postText: string): addSymbolActionCreatorType => ({type: ADD_SYMBOL, inputSymbol: postText});
type setUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: profile
}
export const setUserProfile = (profile: profile): setUserProfileType => ({type: SET_USER_PROFILE, profile});
type setProfileStatusType = {
    type: typeof SET_PROFILE_STATUS
    status: string
}
export const setProfileStatus = (status: string): setProfileStatusType => ({type: SET_PROFILE_STATUS, status});
type setProfilePhotoType = {
    type: typeof SET_PROFILE_PHOTO
    photos: photos
}
export const setProfilePhoto = (photos: photos): setProfilePhotoType => ({type: SET_PROFILE_PHOTO, photos});
type editProfileType = {
    type: typeof EDIT_PROFILE
    edit: boolean
}
export const editProfile = (edit: boolean): editProfileType => ({type: EDIT_PROFILE, edit});
type changeProfileErrorType = {
    type: typeof CHANGE_PROFILE_ERROR
    messages: Array<string>
}
export const changeProfileError = (messages: Array<string>): changeProfileErrorType => ({type: CHANGE_PROFILE_ERROR, messages});

type actionType = addPostActionCreatorType | addSymbolActionCreatorType |
    setUserProfileType | setProfileStatusType | setProfilePhotoType | editProfileType |changeProfileErrorType
//Initial State
type postDataType = {
    id: number
    message: string
    avatar: any
}
let initialState = {
    postData: [
        {id: 1, message: "Hello", avatar: avatar001},
        {id: 2, message: "It's my first post", avatar: avatar002},
        {id: 3, message: "How's it going?", avatar: avatar001},
        {id: 4, message: "Cool site!", avatar: avatar002},
    ] as Array<postDataType>,
    postSymbol: '',
    profile: null as profile | null,
    profileStatus: 'initial status',
    isEdit: false,
    changeProfileError: [] as Array<string>
}

type InitialState = typeof initialState

const profileReducer = (state = initialState, action: actionType): InitialState => {
    let stateCopy = {...state};
    if (action.type === ADD_POST) {
        let newMessage = {
            message: state.postSymbol,
            avatar: avatar002,
            id: state.postData[state.postData.length - 1].id + 1,
        }
        return {
            ...state,
            postData: [...state.postData, newMessage],
            postSymbol: '',
        }
    } else if (action.type === ADD_SYMBOL) {
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
            profile: {...state.profile, photos: action.photos} as profile
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
type thunkType = ThunkAction<Promise<void>, AppRootReducer, any, actionType>
export const getProfile = (userID: number): thunkType => {
    return async (dispatch) => {
        const data = await profileAPI.getProfile(userID)
        dispatch(setUserProfile(data))
    }
}

export const setStatus = (userID: number): thunkType => {
    return async (dispatch) => {
        const status = await profileAPI.getProfileStatus(userID)
        dispatch(setProfileStatus(status))
    }
}

export const updateStatus = (status: string): thunkType => {
    return async (dispatch) => {
        const response = await profileAPI.updateProfileStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setProfileStatus(status))
        }
    }
}

export const updatePhoto = (file: any): thunkType => {
    return async (dispatch) => {
        const response = await profileAPI.updateProfilePhoto(file)
        if (response.resultCode === 0) {
            dispatch(setProfilePhoto(response.data.photos))
        }
    }
}

export const changeProfile = (profile: profile): thunkType => {
    return async (dispatch, getState) => {
        const response = await profileAPI.updateProfile(profile)
        const userID = getState().auth.authData.id
        if (response.resultCode === 0) {
            dispatch(getProfile(userID as number))
            dispatch(changeProfileError(response.messages))
            dispatch(editProfile(false))
        } else {
            dispatch(changeProfileError(response.messages))
        }
    }
}

export default profileReducer;