import React from "react";
import BackgroundLoginSignUp from "../BackgroundLoginSignUp";
import LoginProp from "../LoginProp";

const Login = () => {
  return (
    <BackgroundLoginSignUp>{<LoginProp />}</BackgroundLoginSignUp>
  );
};

export default Login;
