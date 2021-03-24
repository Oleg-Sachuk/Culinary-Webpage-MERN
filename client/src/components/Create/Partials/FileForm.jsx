import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Field, Form } from 'react-final-form';
import { RecipeContext } from '../../../context/RecipeContext';
import style from '../NewRecipt.module.css';
let form = document.getElementById('files');


const FileForm = (props) => {
    const Rec = useContext(RecipeContext);

    return (
        <Form
            onSubmit={formData => {
                Rec.addItem(formData, "images");
            }}
        >
            {({ handleSubmit, pristine, submitting }) => (
                <form action={"/api/files/upload"} method={'POST'} encType={'multipart/form-data'} onChange={handleSubmit} id={'files'} >
                    <Row className={style.formRow}>
                        <Col>
                            <p className={style.unitfont}><b>Insert picture:</b></p>
                        </Col>
                        <Col>
                            <Field type={'file'} placeholder={'picture'} name={'pictures'} component={'input'} className={style.unitfont}
                               multiple={true} />
                        </Col>
                        <Col>
                            <button type={'submit'}>Add files</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <button className={style.btn} onClick={ () => Rec.rmItem(null,'images') } name={'btn'} disabled={submitting || pristine}>Remove </button>
                        </Col>
                    </Row>
                </form>
            )}
        </Form>
    )
}

export default FileForm;