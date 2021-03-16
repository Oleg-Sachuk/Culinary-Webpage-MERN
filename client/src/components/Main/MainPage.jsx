import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import HeaderContainer from '../Header/HeaderContainer';
import style from './MainPage.module.css';
import ReciptCard from './RecipeCard';

const MainPage = (props) => {
    return (
        <div>
            <HeaderContainer />
            <Row>
                <Col>
                    <div className={style.titleblock}>
                        <b className={style.titlefont}>All Recipes:</b>
                    </div>
                    <div className={style.cardblock}>
                        <ReciptCard {...props} />
                    </div>
                </Col>
            </Row>
            <Footer />
        </div>
    )
}

export default MainPage;