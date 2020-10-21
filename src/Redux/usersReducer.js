const follow = 'FOLLOW';
const unfollow = 'UNFOLLOW';
const setUsers = 'SET-USERS';
export const followAC = (userID) => ({type: follow, userID});
export const unfollowAC = (userID) => ({type: unfollow, userID});
export const setUsersAC = (users) => ({type: setUsers, users});

let initialStore = {
    users: [
        // {
        //     id: 1,
        //     followed: true,
        //     fullName: 'Mike Hunt',
        //     status: 'Hello',
        //     photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI2eNwlVfN6pVchP5hdWpwRdPXgR_ICDgb8Q&usqp=CAU',
        //     location: {city: 'Kiev', country: 'Ukraine'}
        // },
        // {
        //     id: 2,
        //     followed: false,
        //     fullName: 'Jone Branch',
        //     status: 'How are you?',
        //     photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI2eNwlVfN6pVchP5hdWpwRdPXgR_ICDgb8Q&usqp=CAU',
        //     location: {city: 'Odessa', country: 'Ukraine'}
        // },
        // {
        //     id: 3,
        //     followed: true,
        //     fullName: 'Ann Dones',
        //     status: 'I have a lot of ideas',
        //     photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQI2eNwlVfN6pVchP5hdWpwRdPXgR_ICDgb8Q&usqp=CAU',
        //     location: {city: 'Dnipro', country: 'Ukraine'}
        // },
    ]
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

    if (action.type === unfollow) {
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

    if (action.type === setUsers) {
        return {
            ...state,
            users: [...state.users, ...action.users]
        }
    }

    return stateCopy;
}

export default usersReducer;