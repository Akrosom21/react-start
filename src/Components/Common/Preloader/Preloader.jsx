import React from "react";
import classes from './Preloader.module.css';
import preloaderGif from '../../../img/preloader.svg';

function Preloader(props) {
    return (
        <div>
            <img src={preloaderGif} alt="preloader" className={classes.preloader}/>
        </div>
    )
}

export default Preloader