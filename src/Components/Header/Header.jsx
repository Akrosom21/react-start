import React from 'react';
import logo from '../../img/logo.webp';
import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logo} alt="logo" />
            </div>
        </header>
    );
}

export default Header;