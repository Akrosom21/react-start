import React from "react";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";

function Login(props) {
    return (
        <>
            <div>Login</div>
            <LoginForm login={login}/>
        </>
    )
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {login})(Login)