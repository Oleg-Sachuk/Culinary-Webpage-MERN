import React from 'react';
import { Card, CardGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import style from './MainPage.module.css';

const ReciptCard = (props) => {
    const imgName = props.instance[0].pictures[0];
    const date = `${imgName.substring(0, 2)}.${imgName.substring(2, 4)}.${imgName.substring(4, 8)}`
    const imgName1 = props.instance[1].pictures[0];
    const date1 = `${imgName1.substring(0, 2)}.${imgName1.substring(2, 4)}.${imgName1.substring(4, 8)}`

    return (
        <div>
            <CardGroup>
                <Card className={style.cardBody}>
                    <DropdownButton className={style.dropdownBtn} >
                        <Dropdown.ItemText>{props.instance[0].description}</Dropdown.ItemText>
                    </DropdownButton>
                    <Card.Img variant="top" src={`/api/files/image/${imgName}`} />
                    <Card.Body>
                        <Card.Title>{props.instance[0].name}</Card.Title>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Posted: {date}</small>
                    </Card.Footer>
                </Card>
                <Card className={style.cardBody}>
                    <DropdownButton className={style.dropdownBtn} >
                        <Dropdown.ItemText>{props.instance[1].description}</Dropdown.ItemText>
                    </DropdownButton>
                    <Card.Img variant="top" src={`/api/files/image/${imgName1}`} />
                    <Card.Body>
                        <Card.Title>{props.instance[1].name}</Card.Title>
                        <Card.Text>

                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Posted: {date1}</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    )
}

export default ReciptCard