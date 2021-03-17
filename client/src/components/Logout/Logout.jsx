import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import Footer from '../Footer/Footer';
import HeaderContainer from '../Header/HeaderContainer';
import style from './Logout.module.css';

const Logout = () => {
    const auth = useContext(AuthContext);

    const Eventhandler = () => {
        auth.logout();
        <Redirect to={'/'} />
    }

    return (
        <div>
            <HeaderContainer />
            <div>
                <Card>
                    <Card.Body>
                        <div>
                            <h1 classname={style.card}>SIGN OUT</h1>
                            <button onClick={Eventhandler}>Sign Out</button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <Footer />
        </div>
    )
}

export default Logout;