const follow = 'FOLLOW';
const unfollow = 'UNFOLLOW';
const setUsers = 'SET-USERS';
const changePage = 'CHANGE-PAGE';
const setUsersNumber = 'SET-USERS-NUMBER';

export const followAC = (userID) => ({type: follow, userID});
export const unfollowAC = (userID) => ({type: unfollow, userID});
export const setUsersAC = (users) => ({type: setUsers, users});
export const changePageAC = (page) => ({type: changePage, page});
export const setUsersNumberAC = (usersNumber) => ({type: setUsersNumber, usersNumber});

let initialStore = {
    users: [],
    usersNumber: 21,
    usersInPage: 20,
    currentPage: 1,
}

const usersReducer = (state = initialStore, action) => {
    let stateCopy = {...state};

    if (action.type === follow) {

        return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userID) {
                    return {...u, followed: false}
                }
                return u
            })
        }
    }

    else if (action.type === unfollow) {
        return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userID) {
                    return {...u, followed: true}
                }
                return u
            })
        }
    }

    else if (action.type === setUsers) {
        return {
            ...state,
            users: [...action.users]
        }
    }
    else if (action.type === changePage) {
        return {
            ...state,
            currentPage: action.page
        }
    }
    else if (action.type === setUsersNumber) {
        return {
            ...state,
            usersNumber: action.usersNumber
        }
    }

    return stateCopy;
}

export default usersReducer;