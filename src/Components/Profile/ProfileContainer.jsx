import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../API/api";


class ProfileContainer extends React.Component{
    componentDidMount() {
        let withRouterUserID = this.props.match.params.userID
        if (!withRouterUserID) {
            withRouterUserID = 2
        }
        profileAPI.getProfile(withRouterUserID)
            .then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
    return (
        <Profile profile={this.props.profile} />
    );
}
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let withRouterProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withRouterProfileContainer);
