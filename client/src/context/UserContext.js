import {createContext} from 'react';

const noop = () => {}

export const UserContext = createContext({
    email: null,
    userId: null,
    login: null,
    getUser: noop,
    rmUser: noop
})