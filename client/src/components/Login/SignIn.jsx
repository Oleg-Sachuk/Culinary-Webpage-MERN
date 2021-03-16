import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Form, Field} from 'react-final-form';
import { maxLength, minValue, required} from '../../utils/validators/validators';
import style from './Login.module.css';
import Textarea from '../Common/Textarea';

const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

const SignIn = (props) => {
    return (
        <Container className={style.mainContainer}>
            <div className={style.headContainer}>
                <div>
                    <h3>LOGIN</h3>
                </div>
            </div>
            <div className={style.mainForm}>
                <Form
                    onSubmit={formData => {
                        console.log(formData);
                    }}
                >
                    {({ handleSubmit, pristine, submitting }) => (
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={2}>
                                    <label>E-mail</label>
                                </Col>
                                <Col sm={10}>
                                    <div>
                                        <Field type={'email'} placeholder={'email'} name={'email'} component={Textarea}
                                            validate={composeValidators(required, maxLength(20), minValue(6))} />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={2}>
                                    <label>Password</label>
                                </Col>
                                <Col sm={10}>
                                    <div>
                                        <Field type={'password'} placeholder={'password'} name={'password'} component={Textarea}
                                            validate={composeValidators(required, maxLength(20), minValue(6))} />
                                    </div>
                                </Col>
                            </Row>
                            <Row className={style.lastRow}>
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <div>
                                        <Field type={'checkbox'} className={style.customCheckbox} id="rememberMe" name={'rememberMe'} component={'input'} />
                                        <label htmlFor="rememberMe">Remember me</label>
                                    </div>
                                    <div>
                                        <button disabled={pristine || submitting}>Sign In</button>
                                    </div>
                                </Col>
                            </Row>
                            {props.captchaUrl && <img src={props.captchaUrl} alt={'captcha'} />}
                            {props.captchaUrl && <Field type={'input'} name={'captcha'} component={Textarea}
                                validate={composeValidators(required, maxLength(10), minValue(2))} />}
                        </form>
                    )}
                </Form>
            </div>
            <div className={style.footContainer}>
                <div>
                    <h5>Fill this form to go on</h5>
                </div>
            </div>
        </Container>
    )
}

export default SignIn;