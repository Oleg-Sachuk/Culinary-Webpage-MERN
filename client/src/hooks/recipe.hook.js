import moment from "moment";
import { useCallback, useEffect, useRef, useState } from "react"

const storageName = 'recipeData';

export const useRecipe = () => {
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [cooking, setCooking] = useState([{}]);
    const [pictures, setPirctures] = useState([{}]);
    const [ingredient, setIngredient] = useState([{}]);
    let ingrRef = useRef([]);
    let cookRef = useRef([]);
    let fileRef = useRef([]);

    const addItem = useCallback((obj, id, num) => {
        switch (id) {
            case "title":
                setName(obj.name);
                setDescription(obj.description)
                break;
            case "ingredient":
                ingrRef.current.push(obj)
                setIngredient(ingrRef.current);
                break;
            case "cooking":
                cookRef.current.splice(num, 0, obj)
                setCooking(cookRef.current);
                break;
            case "images":
                let date = moment().format('DDMMYYYY-HHmm')
                fileRef.current.push(`${date}-${obj}`)
                setPirctures(fileRef.current);
                break;

            default:
                break;
        }

        localStorage.setItem(storageName, JSON.stringify({
            name: obj.name,
            description: obj.description,
            // id: id
        }))

    }, []);

    const rmItem = useCallback((obj, id, num) => {
        let i = 0;
        switch (id) {
            case "title":
                setName(null);
                setDescription(null)
                break;
            case "ingredient":
                i = ingrRef.current.indexOf(obj)
                if (i > -1) {
                    ingrRef.current.splice(i, 1)
                }
                setIngredient(ingrRef.current);
                break;
            case "cooking":
                let j = cookRef.current.indexOf(obj)
                cookRef.current.splice(j, 1)
                setCooking(cookRef.current);
                break;
            case "images":
                fileRef.current.length = 0;
                setPirctures(fileRef.current);
                break;

            default:
                break;
        }

        localStorage.removeItem(storageName);

    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName));
        if (data && data.name) {
            addItem(data, data.name);
        }
    }, [addItem])

    return { addItem, rmItem, ingredient, name, description, cooking, pictures }
}