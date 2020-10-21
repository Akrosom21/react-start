import {connect} from "react-redux";
import Users from "./Users";
import {changePageAC, followAC, setUsersAC, setUsersNumberAC, unfollowAC} from "../../Redux/usersReducer";
import React from "react";
import * as axios from "axios";

class UsersContainerAPI extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersInPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                let reduceCount = response.data.totalCount - (response.data.totalCount - 50)
                this.props.setUsersNumber(reduceCount)
            });
    }

    onChangePage = (page) => {
        this.props.changePage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersInPage}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return (
            <Users
                usersNumber={this.props.usersNumber}
                usersInPage={this.props.usersInPage}
                pagesArr={this.props.usersArr}
                onChangePage={this.onChangePage}
                currentPage={this.props.currentPage}
                usersArr={this.props.usersArr}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        )
    }
}

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI)

export default UsersContainer