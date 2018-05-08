import React from 'react'
import { Container, Title, Section, Notification } from 'reactbulma';
import Company from './Company';
import Level from 'reactbulma/lib/components/Level/Level';
import {Link} from 'react-router-dom'



const Companies = props => {
    return (
        <Section>
            <Title>Companies</Title>
            <Level className="company-list">
                {
                    props.companies.length < 1 ? <Notification info>&#9749; No company record found. Please <a href="/">add one</a>.</Notification> :
                    props.companies.map((company, index) => <Company key={index} company={company} index={index} {...props} /> )
                }
            </Level>
        </Section>
    )
}


export default Companies