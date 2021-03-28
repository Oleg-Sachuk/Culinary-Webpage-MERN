import React, { useCallback, useEffect, useState } from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import { useHttp } from '../../hooks/http.hook';
import Footer from '../Footer/Footer';
import HeaderContainer from '../Header/HeaderContainer';
import style from './RecipePage.module.css';

const RecipePage = (props) => {
    const [recipeData, setRecipeData] = useState('');
    const { request } = useHttp();
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
                    <h3>{image}</h3>
                </Carousel.Caption>
            </Carousel.Item>
        })
        cooking = recipeData.cooking.map(step => {
            return <p className={style.descContainer}><b>{`${recipeData.cooking.indexOf(step)+1}.`}</b> {`${step.step}`}</p>
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

                        </Col>
                    </Row>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default RecipePage;