import {createContext} from 'react';

const noop = () => {}

export const UnitContext = createContext({
    unit: null,
    comp: null, 
    blk: null,
    cons: null,
    liq: null,
    sol: null,
    getUnit: noop,
    rmUnit: noop
})