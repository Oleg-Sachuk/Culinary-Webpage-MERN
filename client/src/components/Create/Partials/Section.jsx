import React from 'react';
import { Col, Row } from 'react-bootstrap';
import style from '../NewRecipt.module.css';
import SelectForm from './SelectForm';

const Section = () => {
    return (
        <section className={style.recSection}>
            <div className={style.subSection}>
                <div>
                    <div>
                        <Row>
                            <Col sm={8}>
                                <p className={style.subtitlefont}><b>Ingredients needed:</b></p>
                            </Col>
                            <Col sm={2}>
                                <p className={style.unitfont}><b>Type:</b></p>
                            </Col>
                            <Col sm={2}>
                                <p className={style.unitfont}><b>Unit:</b></p>
                            </Col>
                        </Row>
                        <ul>
                            <li><SelectForm /></li>
                            <li><SelectForm /></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className={style.subSection}>
                    <div>
                        <p className={style.subtitlefont}><b>How it cooks:</b></p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat sed quibusdam tenetur, at illum sint ullam nemo, minus quos odio incidunt, accusantium magnam natus iure quo cum veniam! Vel, repellendus.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, rem, fugit a, harum nostrum illo amet corporis velit sed obcaecati aperiam repellat dolores doloremque. In enim rerum dolores a magni.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi numquam, ipsam incidunt excepturi repellat mollitia repellendus, sapiente velit ad quam eum laborum quo in officiis, aut error doloremque temporibus veritatis.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam perspiciatis neque optio, aliquam sint aut alias? Animi harum assumenda fugit distinctio? Rem perferendis tempore laudantium officia, officiis voluptatibus voluptatum. Hic.
            </p>
                    </div>
                </div>
                <hr />
            </div>
        </section>
    )
}

export default Section;