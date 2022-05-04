import React from 'react';
import classes from '../Styles/BackgroundLoginSignUp.module.css';

const BackgroundLoginSignUp = ({children}) => {
    return (
        <div>
            <div className={classes.background}>
                <div className={classes.circle}></div>
                <div className= {classes.circle}></div>
            </div>
            {children}
        </div>
    );
};

export default BackgroundLoginSignUp;