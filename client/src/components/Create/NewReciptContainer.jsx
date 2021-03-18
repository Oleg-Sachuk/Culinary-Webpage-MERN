import React, { useCallback, useEffect } from 'react';
import { useHttp } from '../../hooks/http.hook';
import Footer from '../Footer/Footer';
import HeaderContainer from '../Header/HeaderContainer';
import NewRecipt from './NewRecipt';

const NewReciptContainer = (props) => {
    const {request, loading} = useHttp();

    const getUnitInfo = useCallback( async () =>{
        try {
            const unitdata = await request('api/unit/getunits', 'GET', null);
            const data = unitdata.units[0];
            console.log("Data",data);
        } catch (error) {
            
        }
    }, [request])
    
    useEffect( () => {
        getUnitInfo()
    },[getUnitInfo])

    return (
        <div>
            <HeaderContainer />
            <div>
                <NewRecipt />
            </div>
            <Footer />
        </div>
    )
}

export default NewReciptContainer;