import React, { useContext, useEffect, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UnitContext } from '../../../context/UnitContext';
import style from '../NewRecipt.module.css';
import FileForm from './FileForm';
import FormController from './FormController';
import NameForm from './NameForm';

const Section = (props) => {
    const unitcont = useContext(UnitContext);
    let dataRef = useRef();

    useEffect(() => {
        console.log("From", unitcont.unit);
        if (unitcont.unit != null) {
            dataRef.current = unitcont.unit
        }
    }, [unitcont.unit])

    return (
        <section className={style.recSection}>
            <div className={style.subSection}>
                <div>
                    <div className={style.descsection}>
                        <NameForm />
                    </div>
                    <hr />
                    <Row>
                        <Col sm={5}>
                            <p className={style.subtitlefont}><b>Ingredients needed:</b></p>
                        </Col>
                        <hr />
                        <Col sm={1}>
                            <p className={style.unitfont}><b>Amount:</b></p>
                        </Col>
                        <Col sm={2}>
                            <p className={style.unitfont}><b>Type:</b></p>
                        </Col>
                        <Col sm={2}>
                            <p className={style.unitfont}><b>Unit:</b></p>
                        </Col>
                        <Col sm={2}>
                        </Col>
                    </Row>
                    <div>
                        <FormController data={dataRef.current} />
                    </div>
                </div>
                <hr />
                <div className={style.subSection}>
                    <div>
                        <p className={style.subtitlefont}><b>How it cooks:</b></p>
                    </div>
                    <div>
                        <p className={style.subtextfont}><b>I am going to describe it step by step...</b></p>
                    </div>
                    <div>
                        <FormController data={dataRef.current} type={true} />
                    </div>
                </div>
                <hr />
                <div className={style.subSection}>
                    <div>
                        <p className={style.subtitlefont}><b>Maybe some pictures will help:</b></p>
                    </div>
                </div>
                <div>
                    <FileForm />
                </div>
                <hr/>
                <div>
                    <p className={style.unitfont}><b>~ the end. ~</b></p>
                </div>
            </div>
        </section>
    )
}

export default Section;