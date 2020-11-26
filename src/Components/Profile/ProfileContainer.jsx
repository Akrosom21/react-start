import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {changeProfile, editProfile, getProfile, setStatus, updatePhoto, updateStatus} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


function ProfileContainer(props) {
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

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    resultCode: state.auth.resultCode,
    profileStatus: state.profilePage.profileStatus,
    authDataId: state.auth.authData.id,
    isEdit: state.profilePage.isEdit,
    changeProfileError: state.profilePage.changeProfileError
})

export default compose(connect(mapStateToProps, {getProfile, setStatus, updateStatus, updatePhoto, editProfile, changeProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
