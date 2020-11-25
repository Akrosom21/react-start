import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setStatus, updateStatus} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileContainerClassComponent extends React.Component {
    componentDidMount() {
        let withRouterUserID = this.props.match.params.userID
        if (!withRouterUserID) {
            withRouterUserID = this.props.authDataId
        }
        this.props.getProfile(withRouterUserID)
        this.props.setStatus(withRouterUserID)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userID != prevProps.match.params.userID) {
            let withRouterUserID = this.props.match.params.userID
            if (!withRouterUserID) {
                withRouterUserID = this.props.authDataId
            }
            this.props.getProfile(withRouterUserID)
            this.props.setStatus(withRouterUserID)
        }
    }

    render() {
        return (
            <Profile profile={this.props.profile}
                     profileStatus={this.props.profileStatus}
                     updateStatus={this.props.updateStatus}/>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    resultCode: state.auth.resultCode,
    profileStatus: state.profilePage.profileStatus,
    authDataId: state.auth.authData.id
})

export default compose(connect(mapStateToProps, {getProfile, setStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainerClassComponent)
