import React from 'react';
import Main from './Components/Main/Main.jsx';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import HeaderContainer from "./Components/Header/HeaderContainer";
import {connect} from "react-redux";
import {initialize} from './Redux/appReducer'
import Preloader from "./Components/Common/Preloader/Preloader";

class App extends React.Component {

    componentDidMount() {
        this.props.initialize()
    }

    render() {
        if(!this.props.initialized) {
           return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className="wrapper">
                    <HeaderContainer/>
                    <Main/>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.appData.initialized
})

export default connect(mapStateToProps, {initialize})(App);
