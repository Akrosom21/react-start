import {setAuth} from "./authReducer";
import {ThunkAction} from "redux-thunk";
import { AppRootReducer } from "./reduxStore";

const SET_INITIALIZED = 'appData/SET_INITIALIZED';

//Action Creators
type setInitializedType = {
    type: typeof SET_INITIALIZED
}
export const setInitialized = (): setInitializedType => ({type: SET_INITIALIZED});
type actionType = setInitializedType
//Initial State
let initialState = {
    initialized: false,
}

type InitialState =  typeof initialState

const appReducer = (state = initialState, action: actionType): InitialState => {
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
type thunkType = ThunkAction<Promise<void>, AppRootReducer, any, actionType>
export const initialize = (): thunkType => {
    return async (dispatch) => {
        let setAuthData = dispatch(setAuth())
        await setAuthData
        dispatch(setInitialized())
    }
}

export default appReducer;