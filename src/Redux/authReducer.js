import {authAPI} from "../API/api";

const SET_AUTH_DATA = 'auth/SET_AUTH_DATA';
const SET_IS_AUTH = 'auth/SET_IS_AUTH';
const ERROR_AUTH = 'auth/ERROR_AUTH';

//Action Creators
export const setAuthData = (data) => ({type: SET_AUTH_DATA, data});
export const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, isAuth});
export const errorAuth = (error) => ({type: ERROR_AUTH, error});

//Initial State
let initialState = {
    authData: {id: null, login: null, email: null},
    resultCode: false,
    errorAuth: []
}

const authReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    if (action.type === SET_AUTH_DATA) {
        return {
            ...state,
            authData: action.data
        }
    } else if (action.type === SET_IS_AUTH) {
        return {
            ...state,
            resultCode: action.isAuth
        }
    } else if (action.type === ERROR_AUTH) {
        return {
            ...state,
            errorAuth: action.error
        }
    }
    return stateCopy;
}

//Thunk
export const setAuth = () => {
    return async (dispatch) => {
        const data = await authAPI.setAuth()
        dispatch(setAuthData(data.data))
        if (data.resultCode === 0) {
            dispatch(setIsAuth(true))
        } else {
            dispatch(setIsAuth(false))
        }
    }
}

export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        const data = await authAPI.login(email, password, rememberMe)
        if (data.resultCode === 0) {
            dispatch(setAuth())
        } else {
            dispatch(errorAuth(data.messages))
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        const data = await authAPI.logout()
        if (data.resultCode === 0) {
            dispatch(setAuthData({}))
            dispatch(setIsAuth(false))
        }
    }
}

export default authReducer;