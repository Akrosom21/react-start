import {userAPI} from "../API/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const CHANGE_PAGE = 'CHANGE-PAGE';
const SET_USERS_NUMBER = 'SET-USERS-NUMBER';
const FETCHING_SHOW_PRELOADER = 'FETCHING-SHOW-PRELOADER';
const DISABLE_BTN = 'DISABLE_BTN-SHOW-PRELOADER';

//Action Creators
export const follow = (userID) => ({type: FOLLOW, userID});
export const unfollow = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const changePage = (page) => ({type: CHANGE_PAGE, page});
export const setUsersNumber = (usersNumber) => ({type: SET_USERS_NUMBER, usersNumber});
export const fetchingShowPreloader = (preloader) => ({type: FETCHING_SHOW_PRELOADER, preloader});
export const disableBtn = (disable, userID) => ({type: DISABLE_BTN, disable, userID});


//Initial State
let initialState = {
    users: [],
    usersNumber: 21,
    usersInPage: 5,
    currentPage: 1,
    showPreloader: false,
    isDisableBtn: [],
}

const usersReducer = (state = initialState, action) => {
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

    return stateCopy;
}

//Thunk
export const getUsers = (currentPage, usersInPage) => {
    return (dispatch) => {
        dispatch(fetchingShowPreloader(true))
        userAPI.getUsers(currentPage, usersInPage)
            .then(data => {
                dispatch(fetchingShowPreloader(false))
                dispatch(setUsers(data.items))
                let reduceCount = data.totalCount - (data.totalCount - 50)
                dispatch(setUsersNumber(reduceCount))
            });
    }
}

export const getUsersPage = (page, usersInPage) => {
    return (dispatch) => {
        dispatch(changePage(page))
        dispatch(fetchingShowPreloader(true))
        userAPI.getUsersPage(page, usersInPage)
            .then(data => {
                dispatch(fetchingShowPreloader(false))
                dispatch(setUsers(data.items))
            });
    }
}

export const setFollow = (userID) => {
    return (dispatch) => {
        dispatch(disableBtn(true, userID))
        userAPI.follow(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(userID))
                }
                dispatch(disableBtn(false, userID))
            })
    }
}

export const setUnfollow = (userID) => {
    return (dispatch) => {
        dispatch(disableBtn(true, userID))
        userAPI.unfollow(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollow(userID))
                }
                dispatch(disableBtn(false, userID))
            })
    }
}

export default usersReducer;