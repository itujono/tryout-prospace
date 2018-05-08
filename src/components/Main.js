import React from 'react'
import { Hero, Container, Input, Button, Section } from 'reactbulma'
import Field from 'reactbulma/lib/components/Field/Field';
import Control from 'reactbulma/lib/components/Control/Control';
import CreateCompany from './CreateCompany'
import CreateOffice from './CreateOffice'
import Companies from './Companies'
import Company from './Company'
import CompanyPage from './CompanyPage'
import Details from './Details'
import {Route, Link, Switch} from 'react-router-dom'
import Level from 'reactbulma/lib/components/Level/Level';
import Title from 'reactbulma/lib/components/Title/Title';



class Main extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Hero primary fullheight>
                <Hero.Body>
                    <Container>

                        <Link to="/"><Title>Selamat Datang!</Title></Link>

                        <Route exact path="/" render={() => (
                            <Section>
                                <Level>
                                    <Level.Item><CreateCompany {...this.props} /></Level.Item>
                                    <Level.Item><CreateOffice {...this.props} /></Level.Item>
                                </Level>
                                <Companies {...this.props} />
                            </Section>
                        )} />

                        <hr />

                        <Route path="/details/:name" render={() => (
                            <CompanyPage {...this.props} />
                        )} />

                    </Container>
                </Hero.Body>
            </Hero>
        )
    }
}

export default Main