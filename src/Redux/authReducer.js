import {authAPI, captchaAPI} from "../API/api";

const SET_AUTH_DATA = 'auth/SET_AUTH_DATA';
const SET_IS_AUTH = 'auth/SET_IS_AUTH';
const ERROR_AUTH = 'auth/ERROR_AUTH';
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL';

//Action Creators
export const setAuthData = (data) => ({type: SET_AUTH_DATA, data});
export const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, isAuth});
export const errorAuth = (error) => ({type: ERROR_AUTH, error});
export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL, captchaUrl});

//Initial State
let initialState = {
    authData: {id: null, login: null, email: null},
    resultCode: false,
    errorAuth: [],
    captchaUrl: null
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
    else if (action.type === SET_CAPTCHA_URL) {
        return {
            ...state,
            captchaUrl: action.captchaUrl
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

export const login = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        const data = await authAPI.login(email, password, rememberMe, captcha)
        if (data.resultCode === 0) {
            dispatch(setAuth())
        } else {
            if (data.resultCode === 10) {
                dispatch(getCaptcha())
            }
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

export const getCaptcha = () => {
    return async (dispatch) => {
        const data = await captchaAPI.getCaptchaUrl()
        dispatch(setCaptchaUrl(data.url))
    }
}

export default authReducer;