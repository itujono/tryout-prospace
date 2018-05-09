import React from 'react'
import Title from 'reactbulma/lib/components/Title/Title';
import { Button, Section, Level, Notification } from 'reactbulma/lib/components';
import Office from './Office';
import {Link} from 'react-router-dom'
import Company from './Company';



const CompanyPage = (props) => {

    return (
        <Section>
            <div>
                <Title></Title>
                <ul className="company-details">
                    <li>
                        <Title is="5">Address</Title>
                        {props.companies[0].name}
                    </li>
                    <li>
                        <Title is="5">Revenue</Title>
                        {props.companies[0].revenue}
                    </li>
                    <li>
                        <Title is="5">Phone No</Title>
                        {props.companies[0].phone}
                    </li>
                </ul>
                <Link to="/"><Button info>Back to Overview</Button></Link>
            </div>
            <div className="office-container">
                <Title>Offices</Title>
                <Level className="office-list">
                    {
                        props.offices.length < 1 ? <Notification warning>&#9749; No office record found for. Please <a href="/">add one</a>.</Notification> :
                        props.offices.map((office, index) => <Office key={office.name} {...props} index={index} office={office} />)
                    }
                </Level>
            </div>
        </Section>
    )
}


export default CompanyPage