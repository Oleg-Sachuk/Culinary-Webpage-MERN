import { useCallback, useEffect, useRef, useState } from "react"

const storageName = 'recipeData';

export const useRecipe = () => {
    const [item, setItem] = useState([{}]);
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [cooking, setCooking] = useState(null);
    const [pictures, setPirctures] = useState(null);
    const [ingredient, setIngredient] = useState(null);
    let itemRef = useRef([{}]); 

    const addItem = useCallback( (obj) => {
        itemRef.current.push(obj)
        setItem(itemRef.current);

        // switch (id) {
        //     case "title":
        //         break;
        
        //     default:
        //         break;
        // }

        localStorage.setItem(storageName, JSON.stringify({
            item: obj,
        }))
    },[]);

    const rmItem = useCallback( () => {
        setItem(null);

        localStorage.removeItem(storageName);
    },[]);

    useEffect( () => {
        const data = JSON.parse(localStorage.getItem(storageName));
        if(data && data.item){
            addItem(data.item);
        }
    },[addItem])

    return {addItem, rmItem, item}
}