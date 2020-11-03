import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuth} from "../../Redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setAuth()
    }

    render() {
        return <Header resultCode={this.props.resultCode} authData={this.props.authData}/>
    }
}

const mapStateToProps = (state) => ({
    authData: state.auth.authData,
    resultCode: state.auth.resultCode
})

export default connect (mapStateToProps, {setAuth})(HeaderContainer);