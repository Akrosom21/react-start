import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    resultCode: state.auth.resultCode
})

export function withAuthRedirect(Component) {
    class AuthRedirectContainer extends React.Component {
        render() {
            if(!this.props.resultCode) return <Redirect to='/login'/>
            return <Component {...this.props}/>
        }
    }
    let ConnectedAuthRedirectContainer = connect(mapStateToProps)(AuthRedirectContainer)
    return ConnectedAuthRedirectContainer
}