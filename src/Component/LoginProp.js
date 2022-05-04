import React from "react";
import FromComponent from "./FromComponent";
import classes from "../Styles/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const LoginProp = () => {
    return (
        <div>
            <from>
                <div className={classes.form}>
                  <h3>Login Here</h3>
                  <FromComponent id="Username" placeholder="Email or Phone" type="text" />
                  <FromComponent id="Password" placeholder="Password" type="password" />
                  <button className={classes.button}>Login</button>
                  <div className={classes.signIn}><p><small>Don't Have an Account?</small> <span><a href="/signup">Sign up</a></span></p></div>
                  <div className={classes.social}>
                    <div><FontAwesomeIcon icon="fa-brands fa-google" />  Google</div>
                    <div className={classes.fb}><FontAwesomeIcon icon="fa-brands fa-facebook" />  Facebook</div>
                  </div>
                </div>
            </from>
        </div>
    );
};

export default LoginProp;