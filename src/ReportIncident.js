import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, FormControl, InputGroup, Button, Glyphicon, Grid, Row, Col } from 'react-bootstrap';

var SAMPLE_EVENTS = [
	{ city: 'San Fransisco', state: 'California', country: 'USA', venue: 'super cool theater', date: '11-20-2017' }, { city: 'Seattle', state: 'Washington', country: 'USA', venue: 'Safeco', date: '11-25-2017' }, { city: 'Chicago', state: 'Illinois', country: 'USA', venue: 'dome', date: '12-04-2017' }, { city: 'San Diego', state: 'California', country: 'USA', venue: 'super cool theater', date: '11-26-2017' }
]


class ReportIncident extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className="Events">

				<div className="Event-header">
					<h2 className="block-font">Report Incident</h2>
				</div>

			</div>
		);
	}
}



export default ReportIncident;