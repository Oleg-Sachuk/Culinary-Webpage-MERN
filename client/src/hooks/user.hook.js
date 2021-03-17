import { useCallback, useEffect, useState } from "react"

const storageName = 'loggedUserData';

export const useUser = () => {
    const [email, setEmail] = useState(null);
    const [userId, setUserId] = useState(null);
    const [login, setLogin] = useState(null);

    const getUser = useCallback( (userEmail,id,userLogin) => {
        setEmail(userEmail);
        setUserId(id);
        setLogin(userLogin);

        localStorage.setItem(storageName, JSON.stringify({
            userId: id,
            email: userEmail,
            login: userLogin
        }))
    },[]);

    const rmUser = useCallback( () => {
        setEmail(null);
        setUserId(null);
        setLogin(null);

        localStorage.removeItem(storageName);
    },[]);

    useEffect( () => {
        const data = JSON.parse(localStorage.getItem(storageName));
        if(data && data.email && data.login){
            getUser(data.email, data.userId, data.login);
        }
    },[getUser])

    return {getUser, rmUser, email, userId, login}
}