import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../Redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component{
    componentDidMount() {
        this.props.getProfile(this.props.match.params.userID)
    }

    render() {
        if(!this.props.resultCode) return <Redirect to='/login'/>
    return (
        <Profile profile={this.props.profile} />
    );
}
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    resultCode: state.auth.resultCode
})

let withRouterProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfile})(withRouterProfileContainer);
