import {setAuth} from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

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
    return (dispatch) => {
        let setAuthData = dispatch(setAuth())

        Promise.all([setAuthData])
            .then(() => {
                dispatch(setInitialized())
            })
    }
}

export default appReducer;