import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, setStatus, updateStatus} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.match.params.userID)
        this.props.setStatus(12207)

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
    profileStatus: state.profilePage.profileStatus
})

export default compose(connect(mapStateToProps, {getProfile, setStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
