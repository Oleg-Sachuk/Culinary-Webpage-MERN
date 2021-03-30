import React, { useCallback, useEffect, useState } from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import { UnitContext } from '../../context/UnitContext';
import { useHttp } from '../../hooks/http.hook';
import { useUnit } from '../../hooks/unit.hook';
import Footer from '../Footer/Footer';
import HeaderContainer from '../Header/HeaderContainer';
import SelectionForm from './partials/SelectionForm';
import style from './RecipePage.module.css';

const RecipePage = (props) => {
    const [recipeData, setRecipeData] = useState('');
    const { request } = useHttp();
    const { unit, comp, blk, cons, liq, sol, getUnit, rmUnit } = useUnit();
    let pictures = null;
    let cooking = null;
    const id = window.location.pathname.slice(8, window.location.pathname.length)

    const getRecipeInfo = useCallback(async () => {
        try {
            if (recipeData === '') {
                const filedata = await request(`/recipe/${id}`, 'GET', null);
                setRecipeData(filedata.recipe[0]);
                console.log(recipeData);
            }
        } catch (error) {

        }
    }, [request, id, recipeData])

    if (recipeData) {
        pictures = recipeData.pictures.map(image => {
            return <Carousel.Item key={image} interval={5000}>
                <img
                    className="d-block w-100"
                    src={`/api/files/image/${image}`}
                    alt="First slide"
                    width="750" height="500"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        })
        cooking = recipeData.cooking.map(step => {
            return <p key={recipeData.cooking.indexOf(step)} className={style.descContainer}><b>{`${recipeData.cooking.indexOf(step)+1}.`}</b> {`${step.step}`}</p>
        })
    }

    useEffect(() => {
        getRecipeInfo()
    }, [getRecipeInfo])

    return (
        <div>
            <HeaderContainer />
            <div className={style.titleblock}>
                <h1 className={style.font}>{recipeData.name}</h1>
            </div>
            <div className={style.mainContainer}>
                <Carousel>
                    {pictures}
                </Carousel>
            </div>
            <div className={style.titleblock}>
                <h5><b className={style.font}>ОПИСАНИЕ</b></h5>
                <p className={style.descContainer}>{recipeData.description}</p>
            </div>
            <section className={style.recSection}>
                <div className="container-fluid">
                    <Row>
                        <Col>
                            <p className={style.descFont}><b>Приготовление</b></p>
                            {cooking}
                            <hr/>
                        </Col>
                        <hr className={style.vl} />
                        <Col>
                            <p className={style.descFont}><b>ингредиенты</b></p>
                            <ul>
                                <UnitContext.Provider value={{ unit, comp, blk, cons, liq, sol, getUnit, rmUnit }}>
                                    {recipeData && <SelectionForm recipeData = {recipeData} />} 
                                </UnitContext.Provider>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default RecipePage;