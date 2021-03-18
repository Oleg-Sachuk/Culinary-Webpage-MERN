import React from 'react';
import Header from './Header';
import { useUser } from '../../hooks/user.hook';
import { UserContext } from '../../context/UserContext';

const HeaderContainer = () => {
    const { email, userId, login, getUser, rmUser } = useUser();
    
    return (
        <UserContext.Provider value={{email, userId, login, getUser, rmUser}}>
        <div>
            <Header />
        </div>
        </UserContext.Provider>
    )
}


export default HeaderContainer;