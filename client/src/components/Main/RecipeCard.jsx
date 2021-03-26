import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { useUpload } from '../../hooks/upload.hook';
import style from './MainPage.module.css';

const ReciptCard = (props) => {

    const ImageData = useRef(null);
    const {request} = useUpload();
    let Image = useRef(null);
    const [loaded, setLoaded] = useState(false)

    const getImage = useCallback( async () =>{
        try {
            if(loaded === false) {
                const image = await request(`/api/files/image/${props.instance.pictures[0]}`, 'GET', null);
                Image.current = image;
                debugger;
                setLoaded(true);
            }
        } catch (error) {
            
        }
    }, [request,props.instance.pictures,loaded])
    
    useEffect( () => {
        getImage()
    },[getImage])

    return (
        <div>
            <Card className={style.cardBody}>
                <Card.Img variant="top" src={`/api/files/image/${props.instance.pictures[0]}`} />
                <Card.Body>
                    <Card.Title>{props.instance.name}</Card.Title>
                    <Card.Text>
                        <p>{props.instance.description}</p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default ReciptCard