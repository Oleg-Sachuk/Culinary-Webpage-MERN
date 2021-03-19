import React, { Fragment, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import SelectForm from "./SelectForm";
import style from '../NewRecipt.module.css';
import { Field, Form } from "react-final-form";

const ListOfQuestions = (props) => {
    let ind = useRef(1);
    const [state, setState] = useState({ questions: [`${0}`] });
    const [hide, setHide] = useState(true);
    const [type, setType] = useState(null);

    const handleDelete = i => e => {
        e.preventDefault()
        let questions = [
            ...state.questions = state.questions.filter(item => {
                return item !== i;
            }),
            ...state.questions.slice(i + 1)
        ]
        setState({
            questions
        })
    }

    const addQuestion = e => {
        e.preventDefault()
        let questions = state.questions.concat([`${ind.current++}`])
        console.log(questions);
        setState({
            questions
        })
    }

    return (
        <Fragment>
            {state.questions.map((index) => (
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
            <div hidden = {hide}>
                <Form
                    onSubmit={formData => {
                        console.log(formData);
                        setType(formData.type)
                        console.log(type);
                    }}        
                >
                    {({ handleSubmit, pristine, submitting }) => (
                        <form onSubmit={handleSubmit} onChange={handleSubmit}>
                            <Field className={style.formItem} name={'type'} component={'select'}>
                                <option className={style.formOption} value={'bulk'} key={1}>bulk</option>
                                <option className={style.formOption} value={'const'} key={2}>const</option>
                                <option className={style.formOption} value={'liquid'} key={3}>liquid</option>
                                <option className={style.formOption} value={'solid'} key={4}>solid</option>
                            </Field>
                        </form>
                    )}
                </Form>
            </div>
            <button className={style.rmbtn} onClick={addQuestion}>Add position</button>
        </Fragment>
    )

}

export default ListOfQuestions;