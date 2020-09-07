import React from 'react';
import classes from './Menu.module.css';

function Menu() {
    return (
        <aside className={classes.side}>
          <nav className={classes.nav}>
            <ul className={classes.nav__list}>
              <li className={classes.nav__item}><a href="#" className={classes.nav__link}>Profile</a></li>
              <li className={classes.nav__item}><a href="#" className={classes.nav__link}>Messages</a></li>
              <li className={classes.nav__item}><a href="#" className={classes.nav__link}>News</a></li>
              <li className={classes.nav__item}><a href="#" className={classes.nav__link}>Music</a></li>
              <li className={classes.nav__item}><a href="#" className={classes.nav__link}>Settings</a></li>
            </ul>
          </nav>
        </aside>
    )
}

export default Menu;