import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import HeaderContainer from '../Header/HeaderContainer';
import style from './Login.module.css';

const Authenticated = () => {

    return (
        <div>
            <HeaderContainer />
            <div className={style.authenticated}>
                <Card className="text-center">
                    <Card.Header><h1>You are already logged in </h1></Card.Header>
                    <Card.Body>
                        <Card.Title>We offer you to checkout our recipes.</Card.Title>
                        <Card.Text>
                            <Row>
                                <Col>
                                    <p><b>Check the recipes on main page!</b></p>
                                    <NavLink to={'/'} exact>
                                        <button variant="primary">Go to Mainpage</button>
                                    </NavLink>
                                </Col>
                                <hr className={style.vl} />
                                <Col>
                                    <p><b>Sign Out from the website</b></p>
                                    <NavLink to={'/logout'} exact>
                                        <button variant="primary">Sign Out</button>
                                    </NavLink>
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
            </div>
            <Footer />
        </div>
    )
}

export default Authenticated;