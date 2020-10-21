import React from 'react';
import classes from './Menu.module.css';
import { NavLink } from 'react-router-dom';

function Menu() {
    return (
        <aside className={classes.side}>
          <nav className={classes.nav}>
            <ul className={classes.nav__list}>
              <li className={classes.nav__item}><NavLink to="/profile" activeClassName={classes.nav__link_active} className={classes.nav__link}>Profile</NavLink></li>
              <li className={classes.nav__item}><NavLink to="/messages" activeClassName={classes.nav__link_active} className={classes.nav__link}>Messages</NavLink></li>
              <li className={classes.nav__item}><a href="#" className={classes.nav__link}>News</a></li>
              <li className={classes.nav__item}><NavLink to="/users" className={classes.nav__link}>Users</NavLink></li>
              <li className={classes.nav__item}><a href="#" className={classes.nav__link}>Music</a></li>
              <li className={classes.nav__item}><a href="#" className={classes.nav__link}>Settings</a></li>
            </ul>
          </nav>
        </aside>
    )
}

export default Menu;