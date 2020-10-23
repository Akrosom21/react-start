import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthData, setIsAuth} from "../../Redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true,
        })
            .then(response => {
                this.props.setAuthData(response.data.data)
                if (response.data.resultCode === 0) {
                    this.props.setIsAuth(true)
                }
            })
    }

    render() {
        return <Header resultCode={this.props.resultCode} authData={this.props.authData}/>
    }
}

const mapStateToProps = (state) => ({
    authData: state.auth.authData,
    resultCode: state.auth.resultCode
})

export default connect (mapStateToProps, {setIsAuth, setAuthData})(HeaderContainer);