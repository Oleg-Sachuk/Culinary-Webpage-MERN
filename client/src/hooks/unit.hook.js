import { useCallback, useEffect, useState } from "react"

const storageName = 'unitData';

export const useUnit = () => {
    const [unit, setUnit] = useState(null);
    const [comp, setComp] = useState(null);
    const [blk, setBlk] = useState(null);
    const [cons, setCons] = useState(null);
    const [liq, setLiq] = useState(null);
    const [sol, setSol] = useState(null);

    const getUnit = useCallback( async (unitData) => {
        setUnit(unitData);
        setComp(unitData.comp);
        setBlk(unitData.unit_arr_blk);
        setCons(unitData.unit_arr_const);
        setLiq(unitData.unit_arr_liq);
        setSol(unitData.unit_arr_sol);

        localStorage.setItem(storageName, JSON.stringify({
            unit: unitData,
            comp: unitData.comp,
            blk: unitData.unit_arr_blk,
            cons: unitData.unit_arr_const,
            liq: unitData.unit_arr_liq,
            sol: unitData.unit_arr_sol
        }))
    },[]);

    const rmUnit = useCallback( () => {
        setUnit(null);
        setComp(null);
        setBlk(null);
        setCons(null);
        setLiq(null);
        setSol(null);

        localStorage.removeItem(storageName);
    },[]);

    useEffect( () => {
        const data = JSON.parse(localStorage.getItem(storageName));
        if(data && data.unit){
            getUnit(data.unit);
        }
    },[getUnit])

    return {getUnit, rmUnit, unit, comp, blk, cons, liq, sol}
}