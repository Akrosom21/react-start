import React from 'react';
import Menu from '../Menu/Menu.jsx';
import Content from '../Content/Content.jsx';
import classes from './Main.module.css';

function Main() {
    return (
        <main className={classes.main}>
        <Menu />
        <Content />
      </main>
    )
}

export default Main;