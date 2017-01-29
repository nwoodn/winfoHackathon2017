import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, FormControl, FormGroup, ControlLabel, Checkbox, Col, Button } from 'react-bootstrap';

var SAMPLE_EVENTS = [
	{ city: 'San Fransisco', state: 'California', country: 'USA', venue: 'super cool theater', date: '11-20-2017' }, { city: 'Seattle', state: 'Washington', country: 'USA', venue: 'Safeco', date: '11-25-2017' }, { city: 'Chicago', state: 'Illinois', country: 'USA', venue: 'dome', date: '12-04-2017' }, { city: 'San Diego', state: 'California', country: 'USA', venue: 'super cool theater', date: '11-26-2017' }
]

var EVENTS = [];

class ReportIncident extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className="Events">

				<div className="Event-header">
					<h2 className="block-font">Report Incident</h2>
					<AddForm />
				</div>

			</div>
		);
	}
}

class AddForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: '' };

	}


	render() {
		return (
			<div className="form">
				<h2> Add an Event: </h2>
				<Description />
			</div>
		);
	}
}

class Description extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Description: undefined,
			Type: undefined,
			Location: undefined,
			Time: undefined
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		var field = event.target.name;
		var value = event.target.value;

		var changes = {}; //object to hold changes
		changes[field] = value; //change this field
		this.setState(changes); //update state
	}
	handleSubmit(event) {
		EVENTS.push(this.state);
		console.log(EVENTS);
		event.preventDefault();
	}

	render() {
		return (
			<div>
				<Form horizontal>
					<InputBox type="Description" changeCallback={this.handleChange} />
					<InputBox type="Type" changeCallback={this.handleChange} />
					<InputBox type="Location" changeCallback={this.handleChange} />
					<InputBox type="Time" changeCallback={this.handleChange} />
					<InputBox type="Details" changeCallback={this.handleChange} />

					<FormGroup>
						<Col smOffset={2} sm={10}>
							<button className="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>Submit</button>						</Col>
					</FormGroup>
				</Form>
			</div>
		);
	}
}

class InputBox extends React.Component {

	render() {

		return (
			<div>
				<FormGroup >
					<Col componentClass={ControlLabel} sm={2}>
						{this.props.type}
					</Col>
					<Col sm={10}>
						<FormControl type={this.props.type} placeholder={this.props.type} name={this.props.type} onChange={this.props.changeCallback} />
					</Col>
				</FormGroup>
			</div>
		);
	}
}

class Dropdown extends React.Component {

	render() {

		return (
			<FormGroup controlId="formControlsSelect">
				<Col componentClass={ControlLabel} sm={2}>
					Type of Event
					</Col>
				<Col sm={10}>
					<FormControl componentClass="select" placeholder="select" width="small" name={this.props.type} onChange={this.props.changeCallback}>
						<option value="select">select</option>
						<option value="other">Shooting</option>
						<option value="other">Robbery</option>
						<option value="other">Hazard</option>
						<option value="other">Fire</option>
						<option value="other">Car Crash</option>
					</FormControl>
				</Col>
			</FormGroup>

		);
	}
}




export default ReportIncident;