import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../context/UserContext';
import Footer from '../Footer/Footer';
import HeaderContainer from '../Header/HeaderContainer';
import style from './Logout.module.css';

const Logout = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const usercont = useContext(UserContext);

    const Eventhandler = () => {
        auth.logout();
        usercont.rmUser();
        history.push('/');
    }

    return (
        <div>
            <HeaderContainer />
            <div>
                <Card className={style.card}>
                    <Card.Body>
                        <div>
                            <h1>SIGN OUT</h1>
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