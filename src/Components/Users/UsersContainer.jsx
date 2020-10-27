import {connect} from "react-redux";
import Users from "./Users";
import {
    changePage,
    follow,
    setUsers,
    setUsersNumber,
    fetchingShowPreloader,
    unfollow, disableBtn
} from "../../Redux/usersReducer";
import React from "react";
import Preloader from "../Common/Preloader/Preloader";
import {userAPI} from "../../API/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchingShowPreloader(true)
        userAPI.getUsers(this.props.currentPage, this.props.usersInPage)
            .then(data => {
                this.props.fetchingShowPreloader(false)
                this.props.setUsers(data.items)
                let reduceCount = data.totalCount - (data.totalCount - 50)
                this.props.setUsersNumber(reduceCount)
            });
    }

    onChangePage = (page) => {
        this.props.changePage(page)
        this.props.fetchingShowPreloader(true)
        userAPI.getUsersPage(page, this.props.usersInPage)
            .then(data => {
                this.props.fetchingShowPreloader(false)
                this.props.setUsers(data.items)
            });
    }

    render() {
        return (
            <>
                {this.props.showPreloader ? <Preloader/> : null}
                <Users
                    usersNumber={this.props.usersNumber}
                    usersInPage={this.props.usersInPage}
                    pagesArr={this.props.usersArr}
                    onChangePage={this.onChangePage}
                    currentPage={this.props.currentPage}
                    usersArr={this.props.usersArr}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    disableBtn={this.props.disableBtn}
                    isDisableBtn={this.props.isDisableBtn}

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
        isDisableBtn: state.usersPage.isDisableBtn
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
    follow,
    unfollow,
    setUsers,
    changePage,
    setUsersNumber,
    fetchingShowPreloader,
    disableBtn
})(UsersContainer)