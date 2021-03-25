import React, { Fragment, useContext, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import SelectForm from "./SelectForm";
import style from '../NewRecipt.module.css';
import StepForm from "./StepForm";
import { RecipeContext } from "../../../context/RecipeContext";

const FormController = (props) => {
    let arr = useRef([0]);
    const [state, setState] = useState({ keys: [`${0}`] });
    const Rec = useContext(RecipeContext);

    const handleDelete = i => e => {
        e.preventDefault()
        let j  = parseInt(i)
        if(props.type) {
            debugger;
            Rec.rmItem(Rec.cooking[j],'cooking', j+1)
        } else {
            Rec.rmItem(Rec.ingredient[i.parseInt -1],'ingredient')
        }
        arr.current.pop();
        let keys = [
            ...state.keys.slice(i),

            arr.current = state.keys.map( item => {
                return `${state.keys.indexOf(item)}`
            })
        ]
        keys = arr.current;
        setState({
            keys
        })
    }

    const addQuestion = e => {
        e.preventDefault()
        arr.current.push(arr.current.length)
        let keys = arr.current.map( item => `${arr.current.indexOf(item)}`)
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
                            {!props.type ? <SelectForm {...props} sm={11} /> : <StepForm {...props} sm={11} num={state.keys.indexOf(index)+1} />}
                        </Col>
                    </Row>
                </span>
            ))}
            <button className={style.rmbtn} onClick={addQuestion}>Add position</button>
        </Fragment>
    )

}

export default FormController;