import React from 'react';
import { Link } from 'react-router-dom';
import FromComponent from './FromComponent';
import '../Styles/Global.css';
import classes from '../Styles/SignUpProps.module.css';

const SignUpProps = () => {
    return (
        <>
            <form className={classes.from}>
                <h3>Signup Here</h3>

               <div className={classes.signUp}>
                    <div className="halfDiv">
                        <div className="innerHalfDiv">
                            <FromComponent id='Name' placeholder='Full Name' type='text' />
                            <FromComponent id='Email' placeholder='Email' type='email' />
                            <FromComponent id='Phone Number' placeholder='Phone Number' type='number' />
                        </div>
                        <div className="innerHalfDiv">
                            <FromComponent id='Username' placeholder='Username' type='text' />
                            <FromComponent id='Password' placeholder='Password' type='password' />
                            <FromComponent id='Confirm Password' placeholder='Confirm Password' type='password' />
                        </div>
                    </div>
               </div>
                <p className={classes.checkbox}>
                    <input type="checkbox" id="checkBox" /> <small>I agree with the <span><Link to='/terms-and-conditions'>Terms & Conditions</Link></span></small>
                </p>
                <button className={classes.button}>Signup</button>
                <div className={classes.login}><p><small>Already Have an Account? </small> <span><Link to='/login'>Log in</Link></span></p></div>
            </form>
        </>
    );
};

export default SignUpProps;