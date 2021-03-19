import React, { useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Field, Form } from 'react-final-form';
import style from '../NewRecipt.module.css';

const SelectForm = (props) => {
    let options = [1, 2, 3, 4];
    let optiontypes = ['solid', 'liquid', 'bulk', 'const'];
    const dataRef = useRef();
    let unitRef = useRef();
    const [diss, setDiss] = useState(false);

    if (props.data) {
        dataRef.current = props.data.comp[0];
        options = props.data.unit_arr_blk
        unitRef = props.data.unit_arr_blk[0];
    }

    let option = options.map(item => { 
        return <option className={style.formOption} key={item}>{item}</option> 
    });
    let optiontype = optiontypes.map(item => { 
        return <option className={style.formOption} key={item}>{item}</option> 
    });


    const onChangeState = (event) => {
        console.log(diss);
        switch (diss) {
            case false:
                setDiss(true)
                break;
            case true:
                setDiss(false)
                break;
            default:
                break;
        }
    }

    const onChangeType = (type) => {
        switch (type) {
            case "bulk":
                option = props.data.unit_arr_blk.map(item => { 
                    return <option className={style.formOption} key={item}>{item}</option> 
                });
                break;
            case "liquid":
                option = props.data.unit_arr_liq.map(item => { 
                    return <option className={style.formOption} key={item}>{item}</option> 
                });
                break;
            case "const":
                option = props.data.unit_arr_const.map(item => { 
                    return <option className={style.formOption} key={item}>{item}</option> 
                });
                break;
            case "solid":
                option = props.data.unit_arr_sol.map(item => { 
                    return <option className={style.formOption} key={item}>{item}</option> 
                });
                break;
        
            default:
                break;
        }
    }

    return (
        <Form
            onSubmit={formData => {
                console.log(formData);
                if(formData.type && formData.type !== unitRef){
                    onChangeType(formData.type);
                    unitRef = formData.type;
                }
            }}
        >
            {({ handleSubmit, pristine, submitting }) => (
                <form onSubmit={handleSubmit} onChange={handleSubmit}>
                    <Row className={style.formRow}>
                        <Col sm={6}>
                            <Field type={'text'} placeholder={'ingredient'} name={'ingredient'} component={'input'} className={style.formInput}
                                disabled={diss}/>
                        </Col>
                        <Col sm={2}>
                            <Field className={style.formItem} name={'type'} component={'select'} disabled={diss}>
                                {optiontype}
                            </Field>
                        </Col>
                        <Col sm={2}>
                            <Field className={style.formItem} name={'unit'} component={'select'} disabled={diss}>
                                {option}
                            </Field>
                        </Col>
                        <Col sm={2}>
                            <div>
                                {diss 
                                ? <button className={style.btn} name={'btn'} onClick={onChangeState.bind(this)} disabled={submitting || pristine} >Added <b>&#10003;</b></button>
                                : <button className={style.btn} name={'btn'} onClick={onChangeState.bind(this)} disabled={submitting || pristine} >Add</button>
                                }
                            </div>
                        </Col>
                    </Row>
                </form>
            )}
        </Form>
    )
}

export default SelectForm;