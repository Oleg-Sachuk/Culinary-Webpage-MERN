import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';

const ReciptCard = (props) => {
    console.log("In card:", props);
    return (
        <div>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
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