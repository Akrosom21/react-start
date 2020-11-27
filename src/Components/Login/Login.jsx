import React from "react";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {login, logout} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";

function Login(props) {

    if (props.resultCode) {
       return <Redirect to='/profile'/>
    }
    return (
        <>
            <div>Login</div>
            <LoginForm login={props.login}
                       logout={props.logout}
                       errorAuth={props.errorAuth}
                       captchaUrl={props.captchaUrl}/>
        </>
    )
}

const mapStateToProps = (state) => ({
    resultCode: state.auth.resultCode,
    errorAuth: state.auth.errorAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login, logout})(Login)