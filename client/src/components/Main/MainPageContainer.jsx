import React, { useCallback, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../context/UserContext';
import { useHttp } from '../../hooks/http.hook';
import MainPage from './MainPage';
import { Spinner } from 'react-bootstrap';

const MainPageContainer = (props) => {

    const userconst = useContext(UserContext);
    const auth = useContext(AuthContext);
    const { request, loading } = useHttp();

    const getUserInfo = useCallback(async () => {
        try {
            const userdata = await request('api/user/getuser', 'POST', { userId: auth.userId }, {
                Authorization: `Bearer ${auth.token}`
            });
            userdata.then(res => {
                userconst.getUser(res.email, res.userId, res.login)
            })
        } catch (error) {

        }
    }, [auth.token, auth.userId, userconst, request])

    useEffect(() => {
        getUserInfo()
    }, [getUserInfo])

    if (loading) {
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    }

    return (
        <>
            {!loading && <MainPage {...props} />}
        </>
    )
}



export default MainPageContainer;