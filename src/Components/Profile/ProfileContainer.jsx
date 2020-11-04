import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../Redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component{
    componentDidMount() {
        this.props.getProfile(this.props.match.params.userID)
    }

    render() {
    return (
        <Profile profile={this.props.profile} />
    );
}
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    resultCode: state.auth.resultCode
})

export default compose(
    connect(mapStateToProps, {getProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
