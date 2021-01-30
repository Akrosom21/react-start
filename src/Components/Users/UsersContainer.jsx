import {connect} from "react-redux";
import Users from "./Users";
import {getUsers, getUsersPage, setFollow, setUnfollow, setUserFilter} from "../../Redux/usersReducer";
import React from "react";
import Preloader from "../Common/Preloader/Preloader";
import UserFilter from "./UserFilter/UserFilter";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.usersInPage, this.props.userFilter)
    }

    onChangePage = (page) => {
        this.props.getUsersPage(page, this.props.usersInPage, this.props.userFilter)
    }

    render() {
        return (
            <>
                {this.props.showPreloader ? <Preloader/> : null}
                <UserFilter getUsersPage={this.props.getUsersPage} usersInPage={this.props.usersInPage}/>
                <Users
                    usersNumber={this.props.usersNumber}
                    usersInPage={this.props.usersInPage}
                    pagesArr={this.props.usersArr}
                    onChangePage={this.onChangePage}
                    currentPage={this.props.currentPage}
                    usersArr={this.props.usersArr}
                    isDisableBtn={this.props.isDisableBtn}
                    setFollow={this.props.setFollow}
                    setUnfollow={this.props.setUnfollow}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        usersArr: state.usersPage.users,
        usersInPage: state.usersPage.usersInPage,
        usersNumber: state.usersPage.usersNumber,
        currentPage: state.usersPage.currentPage,
        showPreloader: state.usersPage.showPreloader,
        isDisableBtn: state.usersPage.isDisableBtn,
        userFilter: state.usersPage.userFilter
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID) => {
//             dispatch(unfollowAC(userID))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         changePage: (page) => {
//             dispatch(changePageAC(page))
//         },
//         setUsersNumber: (usersNumber) => {
//             dispatch(setUsersNumberAC(usersNumber))
//         },
//         fetchingShowPreloader: (preloader) => {
//             dispatch(showPreloaderAC(preloader))
//         }
//     }
// }

export default connect(mapStateToProps, {
    getUsers,
    getUsersPage,
    setFollow,
    setUnfollow
})(UsersContainer)