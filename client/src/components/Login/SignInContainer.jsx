import React, { useCallback, useContext, useEffect } from 'react';
import Loader from '../../assets/GIFs/Loader';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../context/UserContext';
import { useHttp } from '../../hooks/http.hook';
import Footer from '../Footer/Footer';
import HeaderContainer from '../Header/HeaderContainer';
import Authenticated from './Authenticated';
import SignIn from './SignIn';

const SignInContainer = () => {
    const auth = useContext(AuthContext);
    const userconst = useContext(UserContext);
    const {request, loading} = useHttp();

    const getUserInfo = useCallback( async () =>{
        try {
            const userdata = await request('api/user/getuser', 'POST', {userId: auth.userId});
            console.log("Data",userdata.userdata);
            userconst.getUser( userdata.userdata.email, userdata.userdata.userId, userdata.userdata.login)
            console.log("Email",userconst.email);
        } catch (error) {
            
        }
    }, [auth.userId,userconst, request])
    
    useEffect( () => {
        getUserInfo()
    },[getUserInfo])

    if(loading) {
        <Loader />
    }

    return (
        <div>
            <HeaderContainer />
            {auth.isAuth
            ? <Authenticated /> 
            : <SignIn />
            }
            <Footer />
        </div>
    )
}

export default SignInContainer;