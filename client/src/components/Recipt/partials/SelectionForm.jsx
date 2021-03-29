import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Field, Form } from 'react-final-form';
import { UnitContext } from '../../../context/UnitContext';
import { convertType } from '../../../utils/converters';
import style from '../RecipePage.module.css';

const SelectionForm = (props) => {
    let ingredients = useRef('');
    const unit = useContext(UnitContext);
    console.log(props.recipeData);
    console.log(unit.unit);

    const getRecipeInfo = useCallback(async () => {
        try {
            if (props.recipeData === '') {
                console.log(props.recipeData);
            }
        } catch (error) {

        }
    }, [props.recipeData])

    if (props.recipeData) {
        ingredients = props.recipeData.ingredient.map(item => {
            return <li key={item.igr_name}>
                <Row>
                    <Col sm={6}>{item.igr_name}</Col>
                    <Col sm={3}>{item.value}</Col>
                    <Col sm={3}>
                        <Form
                            onSubmit={formData => {
                                console.log(formData);
                            }}
                        >
                            {({ handleSubmit }) => (
                                <form onSubmit={handleSubmit} onChange={handleSubmit}>
                                    <Col>
                                        <Field className={style.formItem} name={'unit'} component={'select'}>
                                            <option selected>{item.unit}</option>
                                            {convertType(item, unit.unit)}
                                        </Field>
                                    </Col>
                                </form>
                            )}
                        </Form>
                    </Col>
                </Row>
            </li>
        })
    }

    useEffect(() => {
        getRecipeInfo()
    }, [getRecipeInfo])


    // const Eventhandler = () => {
    //     history.push('/');
    // }

    return (
        <div>
            {ingredients}
        </div>
    )
}

export default SelectionForm;