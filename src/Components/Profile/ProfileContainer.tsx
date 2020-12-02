import React, {FC, useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {changeProfile, editProfile, getProfile, setStatus, updatePhoto, updateStatus} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {AppRootReducer} from "../../Redux/reduxStore";
import { profile } from "../../types/types";

type mapStateType = {
    profile: profile
    resultCode: number
    profileStatus: string
    authDataId: number
    isEdit: boolean
    changeProfileError: Array<string>
}
type mapDispatchType = {
    getProfile: (userID: number) => void
        setStatus: (userID: number) => void
    updateStatus: (status: string) => void
    updatePhoto: (file: any) => void
    editProfile: (edit: boolean) => void
    changeProfile: (profile: profile) => void
}
type ownProps = {
    match: {params: {userID: number}}
}
type propsType = mapStateType & mapDispatchType & ownProps

const ProfileContainer: FC<propsType> = (props) => {
    useEffect(() => {
        let withRouterUserID = props.match.params.userID
        if (!withRouterUserID) {
            withRouterUserID = props.authDataId
        }
        props.getProfile(withRouterUserID)
        props.setStatus(withRouterUserID)
    },[props.match.params.userID])
    return (
        <Profile profile={props.profile}
                 profileStatus={props.profileStatus}
                 updateStatus={props.updateStatus}
                 updatePhoto={props.updatePhoto}
                 isOwner={!props.match.params.userID}
                 isEdit={props.isEdit}
                 editProfile={props.editProfile}
                 changeProfile={props.changeProfile}
                 changeProfileError={props.changeProfileError}
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

export default compose<any>(connect<mapStateType, mapDispatchType, ownProps, AppRootReducer>(mapStateToProps,
        {getProfile, setStatus, updateStatus, updatePhoto, editProfile, changeProfile}),
        withRouter,
        withAuthRedirect
)(ProfileContainer)
