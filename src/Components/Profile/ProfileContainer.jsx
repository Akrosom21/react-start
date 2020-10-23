import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component{
    componentDidMount() {
        let withRouterUserID = this.props.match.params.userID
        if (!withRouterUserID) {
            withRouterUserID = 2
        }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + withRouterUserID)
            .then(response => {
                this.props.setUserProfile(response.data)
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
