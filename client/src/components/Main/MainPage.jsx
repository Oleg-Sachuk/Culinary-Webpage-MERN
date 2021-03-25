import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useUpload } from '../../hooks/upload.hook';
import Footer from '../Footer/Footer';
import HeaderContainer from '../Header/HeaderContainer';
import style from './MainPage.module.css';
import ReciptCard from './RecipeCard';

const MainPage = (props) => {
    const auth = useContext(AuthContext);
    const recipeData = useRef(null);
    const {request} = useUpload();
    let Cards = useRef(null);

    const getUserInfo = useCallback( async () =>{
        try {
            const filedata = await request('/api/item/getrecipe', 'GET', null);
            console.log("filedata:",filedata);
            debugger;
            recipeData.current = filedata.recipes;
            Cards.current = recipeData.current.map( recipe => <ReciptCard instance = {recipe} /> )
        } catch (error) {
            
        }
    }, [request])
    
    useEffect( () => {
        getUserInfo()
    },[getUserInfo])

    return (
        <div>
            <HeaderContainer />
            <Row>
                <Col>
                    <div className={style.titleblock}>
                        <b className={style.titlefont}>All Recipes:</b>
                    </div>
                    <div className={style.cardblock}>
                        {Cards.current}
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