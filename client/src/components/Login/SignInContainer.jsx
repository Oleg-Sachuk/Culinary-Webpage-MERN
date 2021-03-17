import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Authenticated from './Authenticated';
import SignIn from './SignIn';

const SignInContainer = () => {
    const auth = useContext(AuthContext);
    return (
        <div>
            {auth.isAuth
            ? <Authenticated /> 
            : <SignIn />
            }
        </div>
    )
}

export default SignInContainer;