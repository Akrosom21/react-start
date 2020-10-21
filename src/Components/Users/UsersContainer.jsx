import {connect} from "react-redux";
import Users from "./Users";
import {changePageAC, followAC, setUsersAC, setUsersNumberAC, unfollowAC} from "../../Redux/usersReducer";

const mapStateToProps = (state) => {
    return {
        usersArr: state.usersPage.users,
        usersInPage: state.usersPage.usersInPage,
        usersNumber: state.usersPage.usersNumber,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        changePage: (page) => {
            dispatch(changePageAC(page))
        },
        setUsersNumber: (usersNumber) => {
            dispatch(setUsersNumberAC(usersNumber))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer