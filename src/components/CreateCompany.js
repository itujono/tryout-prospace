import React from "react";
import {Field, Control, Input, Button, Title, Notification, Delete} from 'reactbulma'
import {Link} from 'react-router-dom';
import CompanyPage from './CompanyPage'

class CreateCompany extends React.Component {
	constructor() {
		super()
		this.createNewCompany = this.createNewCompany.bind(this)
		this.closeMessage = this.closeMessage.bind(this)

		this.state = {
			error: false
		}

	}

	createNewCompany(e) {
		e.preventDefault()

		const name = e.target.elements.name.value
		const address = e.target.elements.address.value
		const revenue = `$${e.target.elements.revenue.value}`
		const code = e.target.elements.code.value
		const phone = `${code} ${e.target.elements.phone.value}`

		const newCompany = {
			name, address, revenue, phone
		}

		if (name && address && revenue && phone) {
			this.props.addCompany(newCompany)
			this.setState(() => ({ error: false }))
			alert("You've successfully added a new company")
			e.target.elements.name.value = ''
			e.target.elements.address.value = ''
			e.target.elements.revenue.value = ''
			e.target.elements.code.value = ''
			e.target.elements.phone.value = ''
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
				<Title is="4">Create Company</Title>
				
				<form className="form" onSubmit={this.createNewCompany}>
					<Field>
						<label className="label">Name</label>
						<Control>
							<Input placeholder="name" id="name" />
						</Control>
					</Field>
					<Field>
						<label className="label">Address</label>
						<Control>
							<Input placeholder="address" id="address" />
						</Control>
					</Field>
					<Field>
						<label className="label">Revenue</label>
						<Control>
							<Input type="number" placeholder="revenue" id="revenue" />
						</Control>
					</Field>

					<label className="label">Phone No.</label>
					<Field hasAddons>
						<Control>
							<span className="select">
								<select id="code">
									<option>+65</option>
									<option>+62</option>
									<option>+61</option>
								</select>
							</span>
						</Control>
						<Control className="is-expanded">
							<Input type="number" placeholder="number" id="phone" />
						</Control>
					</Field>
					<Field>
						<Control>
							<Button warning>Create</Button>
						</Control>
					</Field>
					{
						this.state.error && (
							<Notification danger><Delete onClick={this.closeMessage}/ >Please fill up all the fields.</Notification>
						)
					}
				</form>
			</div>
		);
	}
}

export default CreateCompany