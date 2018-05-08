import React from 'react'
import { Card, SubTitle, Delete } from "reactbulma";


const Office = (props) => {
    return (
        <Card className="office">
            <Card.Content>
                <SubTitle className="darken">{props.office.name}</SubTitle>
                <Delete onClick={() => props.removeOffice(props.index)} />
                <ul>
                    <li>
                        <h4>Location</h4>
                        Long: {props.office.longitude}&deg; <br/> Lat: {props.office.latitude}&deg;
                    </li>
                    <li>
                        <h4>Start Date</h4>
                        {props.office.startdate}
                    </li>
                </ul>
            </Card.Content>
        </Card>
    )
}

export default Office