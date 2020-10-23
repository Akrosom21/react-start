const SET_AUTH_DATA = 'SET_AUTH_DATA';
const SET_IS_AUTH = 'SET_IS_AUTH';
export const setAuthData = (data) => ({type: SET_AUTH_DATA, data});
export const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, isAuth});

let initialStore = {
    authData: {id: null, login: null, email: null},
    resultCode: false,
}

const authReducer = (state = initialStore, action) => {
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

export default authReducer;