import React, { useContext, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Field, Form } from 'react-final-form';
import { UnitContext } from '../../../context/UnitContext';
import { converter, convertType } from '../../../utils/converters';
import style from '../RecipePage.module.css';

const SingleUnitForm = (props) => {
    const unit = useContext(UnitContext);
    const [prev, setPrev] = useState(props.item.unit);
    let [value, setValue] = useState(props.item.value)

    return (
        <li key={props.item.igr_name}>
            <Row>
                <Col sm={6}>{props.item.igr_name}</Col>
                <Col sm={3}>{value}</Col>
                <Col sm={3}>
                    <Form
                        onSubmit={formData => {
                            console.log("Prev:", prev);
                            console.log("New:", formData);
                            let newVal = converter(prev,formData.unit,value)
                            setPrev(formData.unit)
                            setValue(newVal);
                        }}
                    >
                        {({ handleSubmit }) => (
                            <form onSubmit={handleSubmit} onChange={handleSubmit}>
                                <Col>
                                    <Field className={style.formitem} name={'unit'} component={'select'}>
                                        <option selected>{props.item.unit}</option>
                                        {convertType(props.item, unit.unit)}
                                    </Field>
                                </Col>
                            </form>
                        )}
                    </Form>
                </Col>
            </Row>
        </li>
    )
}

export default SingleUnitForm;