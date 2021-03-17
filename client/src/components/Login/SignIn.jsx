import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Form, Field } from 'react-final-form';
import { NavLink } from 'react-router-dom'
import { maxLength, minValue, required } from '../../utils/validators/validators';
import style from './Login.module.css';
import Textarea from '../Common/Textarea';
import { useHttp } from '../../hooks/http.hook';
import { AuthContext } from '../../context/AuthContext';

const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)

const SignIn = (props) => {
    const { loading, request, error, clearError } = useHttp();
    const auth = useContext(AuthContext);

    useEffect(() => {
        if (error) {
            alert(error);
            clearError();
        }
    }, [error, clearError]);

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
                        const data = request('/api/auth/login', 'POST', { ...formData });
                        data.then( res => {
                            auth.login(res.token, res.userId);
                        })
                        console.log(data);
                    }}
                >
                    {({ handleSubmit, pristine, submitting }) => (
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={2}>
                                    <label>Login</label>
                                </Col>
                                <Col sm={10}>
                                    <div>
                                        <Field type={'text'} placeholder={'login'} name={'login'} component={Textarea}
                                            validate={composeValidators(required, maxLength(20), minValue(3))} />
                                    </div>
                                </Col>
                            </Row>
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
                                        <button disabled={pristine || submitting || loading}>Submit</button>
                                        <NavLink to={"/signup"} >
                                            <button >Sign Up</button>
                                        </NavLink>
                                    </div>
                                </Col>
                            </Row>
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