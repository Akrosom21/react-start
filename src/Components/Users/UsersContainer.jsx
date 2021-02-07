import {useDispatch, useSelector} from "react-redux";
import Users from "./Users";
import {getUsersPage, setFollow, setUnfollow} from "../../Redux/usersReducer";
import React, {useEffect} from "react";
import Preloader from "../Common/Preloader/Preloader";
import UserFilter from "./UserFilter/UserFilter";
import { useHistory } from "react-router-dom";
import * as queryString from "querystring";

function UsersContainer () {
    const usersArr = useSelector(state => state.usersPage.users)
    const usersInPage = useSelector(state => state.usersPage.usersInPage)
    const usersNumber = useSelector(state => state.usersPage.usersNumber)
    const currentPage = useSelector(state => state.usersPage.currentPage)
    const showPreloader = useSelector(state => state.usersPage.showPreloader)
    const isDisableBtn = useSelector(state => state.usersPage.isDisableBtn)
    const userFilter = useSelector(state => state.usersPage.userFilter)

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1))
        let actualPage = currentPage
        let filtratedName = userFilter.term
        let filtratedFriend = userFilter.friend
        if (parsed.page) actualPage = Number(parsed.page)
        if (parsed.term) filtratedName = parsed.term
        if (parsed.friend) filtratedFriend = parsed.friend
        dispatch(getUsersPage(actualPage, usersInPage, filtratedName, filtratedFriend))
    }, [])

    useEffect(()=> {
        history.push({
             pathname: '/users',
            search: `?term=${userFilter.term}&friend=${userFilter.friend}&page=${currentPage}`
        })
    }, [userFilter, currentPage])

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