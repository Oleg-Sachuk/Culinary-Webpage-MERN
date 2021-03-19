import React, { useContext, useEffect, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UnitContext } from '../../../context/UnitContext';
import style from '../NewRecipt.module.css';
import ListOfQuestions from './TestForm';

const Section = (props) => {
    const unitcont = useContext(UnitContext);
    let dataRef = useRef();

    useEffect( () => {
        console.log("From",unitcont.unit);
        if (unitcont.unit != null) {
            dataRef.current = unitcont.unit
        }
    },[unitcont.unit])

    return (
        <section className={style.recSection}>
            <div className={style.subSection}>
                <div>
                    <div>
                        <Row>
                            <Col sm={6}>
                                <p className={style.subtitlefont}><b>Ingredients needed:</b></p>
                            </Col>
                            <hr />
                            <Col sm={2}>
                                <p className={style.unitfont}><b>Type:</b></p>
                            </Col>
                            <Col sm={2}>
                                <p className={style.unitfont}><b>Unit:</b></p>
                            </Col>
                            <Col sm={2}>
                            </Col>
                        </Row>
                        <ul>
                            <ListOfQuestions data = {dataRef.current} />
                        </ul>
                    </div>
                </div>
                <hr />
                <div className={style.subSection}>
                    <div>
                        <p className={style.subtitlefont}><b>How it cooks:</b></p>
                    </div>
                    <div>
                        <p>{}</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat sed quibusdam tenetur, at illum sint ullam nemo, minus quos odio incidunt, accusantium magnam natus iure quo cum veniam! Vel, repellendus.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, rem, fugit a, harum nostrum illo amet corporis velit sed obcaecati aperiam repellat dolores doloremque. In enim rerum dolores a magni.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi numquam, ipsam incidunt excepturi repellat mollitia repellendus, sapiente velit ad quam eum laborum quo in officiis, aut error doloremque temporibus veritatis.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam perspiciatis neque optio, aliquam sint aut alias? Animi harum assumenda fugit distinctio? Rem perferendis tempore laudantium officia, officiis voluptatibus voluptatum. Hic.
            </p>
                    </div>
                </div>
                <hr />
                <div>
                    <p className={style.unitfont}><b>~ the end. ~</b></p>
                </div>
            </div>
        </section>
    )
}

export default Section;