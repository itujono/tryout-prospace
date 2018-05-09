import React from 'react'
import Card from 'reactbulma/lib/components/Card/Card';
// import {Content} from 'reactbulma'
import Delete from 'reactbulma/lib/components/Delete/Delete';
import SubTitle from 'reactbulma/lib/components/Title/SubTitle';
import Button from 'reactbulma/lib/components/Button/Button';
import { Link } from 'react-router-dom';


const Company = (props) => {

    return (
        <Card className="companies">
            <Card.Content>
                <SubTitle className="darken">{props.company.name}</SubTitle>
                <Delete onClick={() => {
                    if (confirm("You sure want to delete this company?")) props.removeCompany(props.index)
                }} />
                <ul>
                    <li>
                        <h4>Address</h4>
                        {props.company.address}
                    </li>
                    <li>
                        <h4>Revenue</h4>
                        {props.company.revenue}
                    </li>
                    <li>
                        <h4>Phone No</h4>
                        {props.company.phone}
                    </li>
                </ul>
                <Link to={`/details/${props.company.name}`}><Button success>See detail</Button></Link>
            </Card.Content>
        </Card>
    )
}


export default Company