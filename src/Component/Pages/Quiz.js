import React from 'react';
import classes from '../../Styles/Quiz.module.css';
import '../../Styles/Global.css';
import CheckBox from '../CheckBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Quiz = () => {
    return (
        <>
            <div className={classes.instruction}>
                <h3>Here you will get some question to answer,
                    <br />
                    <small>Get ready to answer those properly.</small>
                </h3>
                <p style={{color: 'yellow'}}>Best of luck</p>
            </div>
            <div className={classes.question}>
                <h2>Question is on the moon you can find that there happy journey</h2>
                <p>There are multiple answers in option</p>
            </div>
            <div className={classes.answer}>
                <div className='halfDiv'>
                    <div className='innerHalfDiv'>
                        <CheckBox text='There is the answer' />
                        <CheckBox text='There is the answer' />
                        <CheckBox text='There is the answer' />
                        <CheckBox text='There is the answer' />
                    </div>
                    <div className='innerHalfDiv'>
                        <CheckBox text='Here is the answer' />
                        <CheckBox text='There is the answer' />
                        <CheckBox text='There is the answer' />
                        <CheckBox text='There is the answer' />
                    </div>
                </div>
            </div>
            
            <footer className={classes.footer}>
                <div className={classes.progress}>
                    <div className={classes.progressBar}>
                            <div className={classes.container}>
                                <div className={classes.Loading}>Here need to add Progress Meter</div>
                            </div>
                        </div>
                    <div className={classes.progressBtn}>
                        <button>Submit Answer <FontAwesomeIcon icon='' />  </button>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Quiz;