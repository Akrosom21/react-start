import {setAuth} from "./authReducer";

const SET_INITIALIZED = 'appData/SET_INITIALIZED';

//Action Creators
export const setInitialized = () => ({type: SET_INITIALIZED});

//Initial State
let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    if (action.type === SET_INITIALIZED) {

        return {
            ...state,
            initialized: true
        }
    }
    return stateCopy;
}

//Thunk
export const initialize = () => {
    return async (dispatch) => {
        let setAuthData = dispatch(setAuth())
        await setAuthData
        dispatch(setInitialized())
    }
}

export default appReducer;