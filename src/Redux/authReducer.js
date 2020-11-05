import {authAPI} from "../API/api";

const SET_AUTH_DATA = 'SET_AUTH_DATA';
const SET_IS_AUTH = 'SET_IS_AUTH';

//Action Creators
export const setAuthData = (data) => ({type: SET_AUTH_DATA, data});
export const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, isAuth});

//Initial State
let initialState = {
    authData: {id: null, login: null, email: null},
    resultCode: true,
}

const authReducer = (state = initialState, action) => {
    let stateCopy = {...state};

    if (action.type === SET_AUTH_DATA) {
        return {
            ...state,
            authData: action.data
        }
    }
    else if (action.type === SET_IS_AUTH) {
        return {
            ...state,
            resultCode: action.isAuth
        }
    }
    return stateCopy;
}

//Thunk
export const setAuth = () => {
    return (dispatch) => {
        authAPI.setAuth()
            .then(data => {
                dispatch(setAuthData(data.data))
                if (data.resultCode === 0) {
                    dispatch(setIsAuth(true))
                }
                else {
                    dispatch(setIsAuth(false))
                }
            })
    }
}

export default authReducer;