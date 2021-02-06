import {useDispatch, useSelector} from "react-redux";
import Users from "./Users";
import {getUsers, getUsersPage, setFollow, setUnfollow} from "../../Redux/usersReducer";
import React, {useEffect} from "react";
import Preloader from "../Common/Preloader/Preloader";
import UserFilter from "./UserFilter/UserFilter";

function UsersContainer () {
    const usersArr = useSelector(state => state.usersPage.users)
    const usersInPage = useSelector(state => state.usersPage.usersInPage)
    const usersNumber = useSelector(state => state.usersPage.usersNumber)
    const currentPage = useSelector(state => state.usersPage.currentPage)
    const showPreloader = useSelector(state => state.usersPage.showPreloader)
    const isDisableBtn = useSelector(state => state.usersPage.isDisableBtn)
    const userFilter = useSelector(state => state.usersPage.userFilter)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers(currentPage, usersInPage))
    }, [])

    const onChangePage = (page) => {
        dispatch(getUsersPage(page, usersInPage, userFilter.term, userFilter.friend))
    }

        return (
            <>
                {showPreloader ? <Preloader/> : null}
                <UserFilter/>
                <Users
                    usersNumber={usersNumber}
                    usersInPage={usersInPage}
                    pagesArr={usersArr}
                    onChangePage={onChangePage}
                    currentPage={currentPage}
                    usersArr={usersArr}
                    isDisableBtn={isDisableBtn}
                    setFollow={setFollow}
                    setUnfollow={setUnfollow}
                />
            </>
        )
}

export default UsersContainer