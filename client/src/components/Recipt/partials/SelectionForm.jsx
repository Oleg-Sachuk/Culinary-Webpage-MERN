import React, { useRef } from 'react';
import SingleUnitForm from './SingleUnitForm';

const SelectionForm = (props) => {
    let ingredients = useRef('');

    if (props.recipeData) {
        ingredients = props.recipeData.ingredient.map(item => {
            return <SingleUnitForm key={props.recipeData.ingredient.indexOf(item)} item = {item} />
        })
    }

    return (
        <div>
            {ingredients}
        </div>
    )
}

export default SelectionForm;