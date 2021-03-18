import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Footer from '../Footer/Footer';
import HeaderContainer from '../Header/HeaderContainer';
import style from './MainPage.module.css';
import ReciptCard from './RecipeCard';

const MainPage = (props) => {
    const auth = useContext(AuthContext);
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
                    {auth.isAuth 
                        && <div className={style.titleblock}>
                        <NavLink to={'/create'} >
                        <button>Create your own recipt</button>
                        </NavLink>
                        </div>
                    }
                </Col>
            </Row>
            <Footer />
        </div >
    )
}

export default MainPage;