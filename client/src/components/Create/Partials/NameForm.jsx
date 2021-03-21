import React, { useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Field, Form } from 'react-final-form';
import { RecipeContext } from '../../../context/RecipeContext';
import { maxLength, minValue, required } from '../../../utils/validators/validators';
import Textarea from '../../Common/Textarea';
import style from '../NewRecipt.module.css';

const NameForm = (props) => {
    const [diss, setDiss] = useState(false);
    const Rec = useContext(RecipeContext);

    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined)

    return (
        <Form
            onSubmit={formData => {
                console.log(formData);
                Rec.addItem(formData);
                setDiss(!diss);
            }}
        >
            {({ handleSubmit, pristine, submitting }) => (
                <form onSubmit={handleSubmit} >
                    <Row className={style.formRow}>
                        <Col sm={2}>
                            <p className={style.nameformRow}><b>Name:</b></p>
                        </Col>
                        <Col sm={10}>
                            <Field type={'textarea'} placeholder={'name'} name={'name'} component={Textarea} className={style.nameformInput}
                                validate={composeValidators(required, maxLength(255), minValue(2))} disabled={diss} />
                        </Col>
                    </Row>
                    <Row className={style.formRow}>
                        <Col sm={2}>
                            <p className={style.nameformRow}><b>Description:</b></p>
                        </Col>
                        <Col sm={10}>
                            <Field type={'textarea'} placeholder={'description'} name={'description'} component={Textarea} className={style.descformInput}
                                validate={composeValidators(required, maxLength(500), minValue(2))} disabled={diss} />
                        </Col>
                    </Row>
                    <Row className={style.formRow}>
                        <Col>
                            {diss
                                ? <button type={'submit'} className={style.namebtn} name={'btn'} disabled={submitting || pristine}>Submitted <b>&#10003;</b></button>
                                : <button type={'submit'} className={style.namebtn} name={'btn'} disabled={submitting || pristine}>Submit</button>
                            }
                        </Col>
                    </Row>
                </form>
            )}
        </Form>
    )
}

export default NameForm;