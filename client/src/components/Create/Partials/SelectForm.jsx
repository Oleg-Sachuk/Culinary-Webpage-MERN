import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import style from '../NewRecipt.module.css';

const SelectForm = () => {
    const options = [1,2,3,4];

    const option= options.map(item => {return <option className={style.formOption}>{item}</option>});

    return (
        <Form>
            <Row className={style.formRow}>
                <Col sm={8}>
                    <input type="text" className={style.formInput} />
                </Col>
                <Col sm={2}>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Control as="select" custom className={style.formItem}>
                            {option}
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col sm={2}>
                    <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Control as="select" custom className={style.formItem}>
                            {option}
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    )
}

export default SelectForm;