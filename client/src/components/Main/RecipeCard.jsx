import React from 'react';
import { Card, Dropdown, DropdownButton } from 'react-bootstrap';
import style from './MainPage.module.css';

const ReciptCard = (props) => {
    const imgName = props.instance.pictures[0];
    const date = `${imgName.substring(0, 2)}.${imgName.substring(2, 4)}.${imgName.substring(4, 8)}`

    return (
        <div>
            <Card className={style.cardBody}>
                <DropdownButton className={style.dropdownBtn} id="dropdown-item-button" >
                    <Dropdown.ItemText>{props.instance.description}</Dropdown.ItemText>
                </DropdownButton>
                <Card.Img variant="top" src={`/api/files/image/${imgName}`} />
                <Card.Body>
                    <Card.Title>{props.instance.name}</Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Posted: {date}</small>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default ReciptCard