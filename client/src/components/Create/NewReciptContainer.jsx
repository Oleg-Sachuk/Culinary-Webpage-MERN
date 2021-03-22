import React, { useCallback, useEffect, useRef } from 'react';
import { UnitContext } from '../../context/UnitContext';
import { RecipeContext } from '../../context/RecipeContext';
import { useHttp } from '../../hooks/http.hook';
import { useRecipe } from '../../hooks/recipe.hook';
import { useUnit } from '../../hooks/unit.hook';
import Footer from '../Footer/Footer';
import HeaderContainer from '../Header/HeaderContainer';
import NewRecipt from './NewRecipt';

const NewReciptContainer = (props) => {
    const { request } = useHttp();
    const dataRef = useRef();
    const { unit, comp, blk, cons, liq, sol, getUnit, rmUnit } = useUnit();
    const { ingredient, name, description, cooking, pictures, addItem, rmItem } = useRecipe();

    const getUnitInfo = useCallback(async () => {
        try {
            const unitdata = await request('api/unit/getunits', 'GET', null);
            const data = unitdata.units[0];
            dataRef.current = data;
        } catch (error) {

        }
    }, [request])

    useEffect(() => {
        getUnitInfo()
        if (dataRef.current != null) {
            getUnit(dataRef.current)
        }
    }, [getUnitInfo,getUnit])


    return (
        <div>
            <UnitContext.Provider value={{ unit, comp, blk, cons, liq, sol, getUnit, rmUnit }}>
                <HeaderContainer />
                <div>
                    <RecipeContext.Provider value={{ ingredient, name, description, cooking, pictures, addItem, rmItem }}>
                    <NewRecipt />
                    </RecipeContext.Provider>
                </div>
                <Footer />
            </UnitContext.Provider>
        </div>
    )
}

export default NewReciptContainer;