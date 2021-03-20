import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Field, Form } from 'react-final-form';
import { maxLength, minValue, required } from '../../../utils/validators/validators';
import Textarea from '../../Common/Textarea';
import style from '../NewRecipt.module.css';

const StepForm = (props) => {
    const [diss, setDiss] = useState(false);

    const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

    return (
        <Form
            onSubmit={formData => {
                console.log(formData);
                setDiss(!diss);
            }}
        >
            {({ handleSubmit, pristine, submitting }) => (
                <form onSubmit={handleSubmit} >
                    <Row className={style.formRow}>
                        <Col sm={1}>
                            <p className={style.number}><b>{props.num}.</b></p>
                        </Col>
                        <Col sm={9}>
                            <Field type={'textarea'} placeholder={`step ${props.num}`} name={'step'} component={Textarea} className={style.formInput}
                                validate={composeValidators(required, maxLength(500), minValue(10))} disabled={diss}/>
                        </Col>
                        <Col sm={2}>
                            {diss 
                                ? <button type={'submit'} className={style.btn} name={'btn'} disabled={submitting || pristine}>Added <b>&#10003;</b></button>
                                : <button type={'submit'} className={style.btn} name={'btn'} disabled={submitting || pristine}>Add</button>
                            }
                        </Col>
                    </Row>
                </form>
            )}
        </Form>
    )
}

export default StepForm;