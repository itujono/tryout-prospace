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
                <ul>
                    <li>
                        <h4>Address</h4>
                        {props.companies.address}
                    </li>
                    <li>
                        <h4>Revenue</h4>
                        {props.companies.revenue}
                    </li>
                    <li>
                        <h4>Phone No</h4>
                        {props.companies.phone}
                    </li>
                </ul>
                <Link to="/"><Button>Back to Overview</Button></Link>
            </div>
            <div>
                <Title>Offices</Title>
                <Level className="office-list">
                    {
                        props.offices.length < 1 ? <Notification warning>&#9749; No office record found for {props.company}. Please <a href="/">add one</a>.</Notification> :
                        props.offices.map((office, index) => <Office key={office.name} {...props} index={index} office={office} />)
                    }
                </Level>
            </div>
        </Section>
    )
}


export default CompanyPage