import React, { useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Field, Form } from 'react-final-form';
import { RecipeContext } from '../../../context/RecipeContext';
import Textarea from '../../Common/Textarea';
import style from '../NewRecipt.module.css';

const FileForm = (props) => {
    const [diss, setDiss] = useState(false);
    const Rec = useContext(RecipeContext);

    return (
        <Form
            onSubmit={formData => {
                if (diss === false) {
                    Rec.addItem(formData, "cooking", props.num - 1);
                } else {
                    Rec.rmItem(formData, "cooking", props.num - 1);
                }
                console.log("Cooking", Rec.cooking);
                setDiss(!diss);
            }}
        >
            {({ handleSubmit, pristine, submitting }) => (
                <form onSubmit={handleSubmit} >
                    <Row className={style.formRow}>
                        <Col>
                            <p className={style.unitfont}><b>Insert picture:</b></p>
                        </Col>
                        <Col>
                            <Field type={'file'} placeholder={'picture'} name={'step'} component={'input'} className={style.formInput}
                               multiple disabled={diss} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
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

export default FileForm;