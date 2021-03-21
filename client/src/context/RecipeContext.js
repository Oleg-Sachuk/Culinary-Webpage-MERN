import {createContext} from 'react';

const noop = () => {}

export const RecipeContext = createContext({
    name: null,
    description: null,
    cooking: null,
    pictures: null,
    ingredient: null,
    addItem: noop,
    rmItem: noop
})