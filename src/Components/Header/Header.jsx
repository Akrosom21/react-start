import React from 'react';
import logo from '../../img/logo.webp';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props) {

    const logout = () => {
        props.logout()
    }
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logo} alt="logo" />
            </div>
            {props.resultCode
                ?
                <div>
                    {props.authData.login}
                    <button onClick={logout}>LOGOUT</button>
                </div>

                :

                <NavLink to={'/login'} className={classes.header__login}>Login</NavLink>}


        </header>
    );
}

export default Header;