import {authAPI, captchaAPI} from "../API/api";
import {authDataType} from "../types/types";

const SET_AUTH_DATA = 'auth/SET_AUTH_DATA';
const SET_IS_AUTH = 'auth/SET_IS_AUTH';
const ERROR_AUTH = 'auth/ERROR_AUTH';
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL';

//Action Creators
type setAuthDataType = {
    type: typeof SET_AUTH_DATA
    data: authDataType
}
export const setAuthData = (data: authDataType): setAuthDataType => ({type: SET_AUTH_DATA, data});
type setIsAuthType = {
    type: typeof SET_IS_AUTH
    isAuth: boolean
}
export const setIsAuth = (isAuth: boolean): setIsAuthType => ({type: SET_IS_AUTH, isAuth});
type errorAuthType = {
    type: typeof ERROR_AUTH
    error: Array<string>
}
export const errorAuth = (error: Array<string>): errorAuthType => ({type: ERROR_AUTH, error});
type setCaptchaUrlType = {
    type: typeof SET_CAPTCHA_URL
    captchaUrl: string | null
}
export const setCaptchaUrl = (captchaUrl: string | null): setCaptchaUrlType => ({type: SET_CAPTCHA_URL, captchaUrl});

//Initial State
let initialState = {
    authData: {id: null, login: null, email: null} as authDataType,
    resultCode: false,
    errorAuth: [] as Array<string>,
    captchaUrl: null as string | null
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
            dispatch(setCaptchaUrl(null))
        }
        else {
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