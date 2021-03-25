import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Field, Form } from 'react-final-form';
import { RecipeContext } from '../../../context/RecipeContext';
import { useHttp } from '../../../hooks/http.hook';
import style from '../NewRecipt.module.css';
// let form = document.getElementById('files');

const FileForm = (props) => {
    const Rec = useContext(RecipeContext);
    let form = document.getElementById('files');
    const { request } = useHttp();

    const SubmitWholeForm = async () => {
        const name = form.elements['pictures'].files;
        Rec.rmItem(null,'images');
        for(let i=0; i<name.length; ++i) {
            Rec.addItem(name[i].name, "images");
        }
        console.log(Rec.pictures);
        await request('/api/item/setrecipe', 'POST', {name: Rec.name, description: Rec.description,
        cooking: Rec.cooking, pictures: Rec.pictures, ingredient: Rec.ingredient});
        form.submit();
    }

    return (
        <div>
            <Form
                onSubmit={formData => {
                    
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
                        </Row>
                        <Row>
                            <Col>
                                <button className={style.btn} onClick={() => Rec.rmItem(null, 'images')} name={'btn'} disabled={submitting || pristine}>Remove </button>
                            </Col>
                        </Row>
                    </form>
                )}
            </Form>
            <div>
                <button className={style.unitfont} onClick={() => SubmitWholeForm()}>Send the recipe!</button>
            </div>
        </div>
    )
}

export default FileForm;