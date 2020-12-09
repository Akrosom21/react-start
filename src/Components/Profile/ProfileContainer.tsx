import React, {FC, useEffect } from "react";
import Profile from "./Profile";
import {connect, useSelector, useDispatch} from "react-redux";
import {changeProfile, editProfile, getProfile, setStatus, updatePhoto, updateStatus} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {AppRootReducer} from "../../Redux/reduxStore";
import { profile } from "../../types/types";

type mapDispatchType = {
    updateStatus: (status: string) => void
    updatePhoto: (file: any) => void
    editProfile: (edit: boolean) => void
    changeProfile: (profile: profile) => void
}
type ownProps = {
    match: {params: {userID: number}}
}
type propsType = mapDispatchType & ownProps

const ProfileContainer: FC<propsType> = (props) => {
    const profile = useSelector((state: AppRootReducer) => state.profilePage.profile)
    const resultCode = useSelector((state: AppRootReducer) => state.auth.resultCode)
    const profileStatus = useSelector((state: AppRootReducer) => state.profilePage.profileStatus)
    const authDataId = useSelector((state: AppRootReducer) => state.auth.authData.id)
    const isEdit = useSelector((state: AppRootReducer) => state.profilePage.isEdit)
    const changeProfileError = useSelector((state: AppRootReducer) => state.profilePage.changeProfileError)
    const dispatch = useDispatch()
    useEffect(() => {
        let withRouterUserID = props.match.params.userID
        if (!withRouterUserID) {
            withRouterUserID = authDataId
        }
        dispatch(getProfile(withRouterUserID))
        dispatch(setStatus(withRouterUserID))
    },[props.match.params.userID])
    return (
        <Profile profile={profile}
                 profileStatus={profileStatus}
                 updateStatus={props.updateStatus}
                 updatePhoto={props.updatePhoto}
                 isOwner={!props.match.params.userID}
                 isEdit={isEdit}
                 editProfile={props.editProfile}
                 changeProfile={props.changeProfile}
                 changeProfileError={changeProfileError}
        />
    );
}

const mapStateToProps = (state: AppRootReducer) => ({
    profile: state.profilePage.profile,
    resultCode: state.auth.resultCode,
    profileStatus: state.profilePage.profileStatus,
    authDataId: state.auth.authData.id,
    isEdit: state.profilePage.isEdit,
    changeProfileError: state.profilePage.changeProfileError
})

export default compose<any>(connect<mapDispatchType, ownProps, AppRootReducer>(null,
        {getProfile, setStatus, updateStatus, updatePhoto, editProfile, changeProfile}),
        withRouter,
        withAuthRedirect
)(ProfileContainer)
