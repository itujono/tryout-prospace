import React from "react";
import {Field, Control, Input, Button, Title, Notification, Delete} from 'reactbulma'

class CreateOffice extends React.Component {
    constructor() {
        super()
        this.createNewOffice = this.createNewOffice.bind(this)
        this.closeMessage = this.closeMessage.bind(this)

        this.state = {
            error: false
        }
    }

    createNewOffice(e) {
        e.preventDefault()

        const name = `${e.target.elements.name.value} Office`
        const latitude = e.target.elements.latitude.value
        const longitude = e.target.elements.longitude.value
        const startdate = e.target.elements.startdate.value
        const company = e.target.elements.company.value

        const office = {
            name, latitude, longitude, startdate, company
        }

        if (name && latitude && longitude && startdate && company) {
            this.props.addOffice(office)
            this.setState(() => ({ error: false }))
            e.target.elements.name.value = ''
            e.target.elements.latitude.value = ''
            e.target.elements.longitude.value = ''
            e.target.elements.startdate.value = ''
            e.target.elements.company.value = ''
        } else {
            this.setState(() => ({ error: true }))
        }
    }

    closeMessage() {
        this.setState(() => ({ error: false }))
    }

	render() {
		return (
            <div>
                <Title is="4">Create Office</Title>
                <form className="form" onSubmit={this.createNewOffice}>
                    <Field>
                        <label className="label">Name</label>
                        <Control>
                            <Input placeholder="name" id="name" />
                        </Control>
                    </Field>
                    <label className="label">Location</label>
                    <Field hasAddons>
                        <Control>
                            <Input placeholder="latitude" id="latitude" />
                        </Control>
                        <Control>
                            <Input placeholder="longitude" id="longitude" />
                        </Control>
                    </Field>
                    <Field>
                        <label className="label">Office Start Date</label>
                        <Control>
                            <Input type="date" placeholder="Start Date" id="startdate" />
                        </Control>
                    </Field>
                    <Field>
                        <label className="label">Company</label>
                        <Control className="is-expanded">
                            <span className="select">
                                <select id="company">
                                    {
                                        this.props.companies.map((company, index) => <option key={index}>{company.name}</option>)
                                    }
                                </select>
                            </span>
                        </Control>
                    </Field>
                    <Field>
                        <Control>
                            <Button warning>Create</Button>
                        </Control>
                    </Field>
                    {
                        this.state.error && (
                            <Notification danger><Delete onClick={this.closeMessage} />Please fill up all the fields.</Notification>
                        )
                    }
                </form>
            </div>
		);
	}
}

export default CreateOffice