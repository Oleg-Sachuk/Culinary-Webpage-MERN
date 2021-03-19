import React, { Fragment, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import SelectForm from "./SelectForm";
import style from '../NewRecipt.module.css';

const FormController = (props) => {
    let ind = useRef(1);
    const [state, setState] = useState({ keys: [`${0}`] });

    const handleDelete = i => e => {
        e.preventDefault()
        let keys = [
            ...state.keys = state.keys.filter(item => {
                return item !== i;
            }),
            ...state.keys.slice(i + 1)
        ]
        setState({
            keys
        })
    }

    const addQuestion = e => {
        e.preventDefault()
        let keys = state.keys.concat([`${ind.current++}`])
        setState({
            keys
        })
    }

    return (
        <Fragment>
            {state.keys.map((index) => (
                <span key={index}>
                    <Row>
                        <Col className={style.col} sm={1}>
                            <button className={style.btn} onClick={handleDelete(index)}>X</button>
                        </Col>
                        <Col>
                            <SelectForm {...props} sm={11} />
                        </Col>
                    </Row>
                </span>
            ))}
            <button className={style.rmbtn} onClick={addQuestion}>Add position</button>
        </Fragment>
    )

}

export default FormController;