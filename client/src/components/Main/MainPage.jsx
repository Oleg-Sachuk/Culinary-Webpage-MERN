import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { Col } from 'react-bootstrap';
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
            recipeData.current = filedata.recipes;
        } catch (error) {
            
        }
    }, [request])

    const splitArray = (array, stride, size) => {
        let tmp = [];
        for(let i = 0; i < array.length; i += stride) {
            tmp.push(array.slice(i, i + size));
        }
        return tmp;
    }
    
    if(recipeData.current) {
        let m1 = [];
        for (let i = 0; i < recipeData.current.length; i++) {
        m1.push(recipeData.current[i]);
    }
    let arr = (splitArray(m1, 2, recipeData.current.length));
    Cards.current = arr.map( recipe => <ReciptCard key={recipe.name} instance = {recipe} /> )
    }
    
    useEffect( () => {
        getUserInfo()
    },[getUserInfo])

    return (
        <div>
            <HeaderContainer />
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
                        <button>Create your own recipe</button>
                        </NavLink>
                        </div>
                    }
                </Col>
            <Footer />
        </div >
    )
}

export default MainPage;