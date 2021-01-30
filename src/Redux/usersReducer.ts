import {userAPI} from "../API/api";
import {user} from "../types/types";
import {ThunkAction} from "redux-thunk";
import { AppRootReducer } from "./reduxStore";

const FOLLOW = 'usersPage/FOLLOW';
const UNFOLLOW = 'usersPage/UNFOLLOW';
const SET_USERS = 'usersPage/SET-USERS';
const CHANGE_PAGE = 'usersPage/CHANGE-PAGE';
const SET_USERS_NUMBER = 'usersPage/SET-USERS-NUMBER';
const FETCHING_SHOW_PRELOADER = 'usersPage/FETCHING-SHOW-PRELOADER';
const DISABLE_BTN = 'usersPage/DISABLE_BTN-SHOW-PRELOADER';
const USER_FILTER = 'usersPage/USER_FILTER';

//Action Creators
type followType = {
    type: typeof FOLLOW
    userID: number
}
export const follow = (userID: number): followType => ({type: FOLLOW, userID});
type unfollowType = {
    type: typeof UNFOLLOW
    userID: number
}
export const unfollow = (userID: number): unfollowType => ({type: UNFOLLOW, userID});
type setUsersType = {
    type: typeof SET_USERS
    users: Array<user>
}
export const setUsers = (users: Array<user>): setUsersType => ({type: SET_USERS, users});
type changePageType = {
    type: typeof CHANGE_PAGE
    page: number
}
export const changePage = (page: number): changePageType => ({type: CHANGE_PAGE, page});
type setUsersNumberType = {
    type: typeof SET_USERS_NUMBER
    usersNumber: number
}
export const setUsersNumber = (usersNumber: number): setUsersNumberType => ({type: SET_USERS_NUMBER, usersNumber});
type fetchingShowPreloaderType = {
    type: typeof FETCHING_SHOW_PRELOADER
    preloader: boolean
}
export const fetchingShowPreloader = (preloader: boolean): fetchingShowPreloaderType => ({type: FETCHING_SHOW_PRELOADER, preloader});
type disableBtnType = {
    type: typeof DISABLE_BTN
    disable: boolean
    userID: number
}
export const disableBtn = (disable: boolean, userID: number): disableBtnType => ({type: DISABLE_BTN, disable, userID});
type setUserFilterType = {
    type: typeof USER_FILTER,
    userFilter: string
}
export const setUserFilter = (userFilter: string): setUserFilterType => ({type: USER_FILTER, userFilter})

type actionsType = followType | unfollowType | setUsersType | changePageType |
    setUsersNumberType | fetchingShowPreloaderType | disableBtnType | setUserFilterType
//Initial State
let initialState = {
    users: [] as Array<user>,
    usersNumber: 21,
    usersInPage: 5,
    currentPage: 1,
    showPreloader: false,
    isDisableBtn: [] as Array<number>,
    userFilter: ''
}

type InitialState = typeof initialState

const usersReducer = (state = initialState, action: actionsType): InitialState => {
    let stateCopy = {...state};
    if (action.type === FOLLOW) {

        return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userID) {
                    return {...u, followed: true}
                }
                return u
            })
        }
    } else if (action.type === UNFOLLOW) {
        return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userID) {
                    return {...u, followed: false}
                }
                return u
            }),

        }
    } else if (action.type === SET_USERS) {
        return {
            ...state,
            users: [...action.users]
        }
    } else if (action.type === CHANGE_PAGE) {
        return {
            ...state,
            currentPage: action.page
        }
    } else if (action.type === SET_USERS_NUMBER) {
        return {
            ...state,
            usersNumber: action.usersNumber
        }
    } else if (action.type === FETCHING_SHOW_PRELOADER) {
        return {
            ...state,
            showPreloader: action.preloader
        }
    } else if (action.type === DISABLE_BTN) {
        return {
            ...state,
            isDisableBtn: action.disable ? [action.userID] : []

        }
    }
    else if (action.type === USER_FILTER) {
        return {
            ...state,
            userFilter: action.userFilter
        }
    }
    return stateCopy;
}

//Thunk
type thunkType =  ThunkAction<Promise<void>, AppRootReducer, any, actionsType>

export const getUsers = (currentPage: number, usersInPage: number, term: string): thunkType => {
    return async (dispatch) => {
        dispatch(fetchingShowPreloader(true))
        const data = await userAPI.getUsers(currentPage, usersInPage, term)
        dispatch(fetchingShowPreloader(false))
        dispatch(setUsers(data.items))
        dispatch(setUsersNumber(data.totalCount))
    }
}

export const getUsersPage = (page: number, usersInPage: number, term: string): thunkType => {
    return async (dispatch) => {
        dispatch(changePage(page))
        dispatch(fetchingShowPreloader(true))
        dispatch(setUserFilter(term))
        const data = await userAPI.getUsersPage(page, usersInPage, term)
        dispatch(fetchingShowPreloader(false))
        dispatch(setUsers(data.items))
        dispatch(setUsersNumber(data.totalCount))
    }
}

export const setFollow = (userID: number): thunkType => {
    return async (dispatch) => {
        dispatch(disableBtn(true, userID))
        const data = await userAPI.follow(userID)
        if (data.resultCode === 0) {
            dispatch(follow(userID))
        }
        dispatch(disableBtn(false, userID))
    }
}

export const setUnfollow = (userID: number): thunkType => {
    return async (dispatch) => {
        dispatch(disableBtn(true, userID))
        const data = await userAPI.unfollow(userID)
        if (data.resultCode === 0) {
            dispatch(unfollow(userID))
        }
        dispatch(disableBtn(false, userID))
    }
}

export default usersReducer;