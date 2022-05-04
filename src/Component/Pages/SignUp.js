import React from 'react';
import BackgroundLoginSignUp from '../BackgroundLoginSignUp';
import SignUpProps from '../SignUpProps';

function SignUp() {
    return (
        <>
        <BackgroundLoginSignUp>{<SignUpProps />}</BackgroundLoginSignUp>
        </>
    );
};

export default SignUp;