import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Map.css';
import { Form, FormControl, InputGroup, Button, Glyphicon, Grid, Row, Col } from 'react-bootstrap';
import L from 'leaflet';

var SAMPLE_DATA = [{
	description:'blah blah blah', 'event_type': 'robbery', location:[47.6062, -122.3321], time:'3:00pm', details:'it was scary'
}]

class Map extends React.Component {
	constructor(props) {
		super(props);
		this.state = {events: SAMPLE_DATA};
		this.setState = this.setState.bind(this);
	}

	render() {

		return (
			<div className="Events">

				<div className="Event-header">
					<h2 className="block-font">MAP</h2>
				</div>
				<div>
					<main>
					<MyMap marker={this.state.events} />
					
					</main>
				</div>

			</div>
		);
	}
}

class MyMap extends Component {
	constructor() {
		super();
		this.state = {
			map: null
		};
	}

	componentDidMount() {
		setTimeout(() => {
			var map = L.map('map', {
				minZoom: 2,
				maxZoom: 20,
				layers: [L.tileLayer('https://api.mapbox.com/styles/v1/sarahf95/ciyhy04vx00212rqorqk0rq9d/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2FyYWhmOTUiLCJhIjoiY2l3YndsZTB5MDRvOTJ0bGtvazZvdGZsYiJ9.gBaTfDLpBwuLDxMfsBBxjw', { attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>' })],
				attributionControl: false,
			});
			map.setView(new L.LatLng(46.6, -122.3), 7);

			// car
			var carIcon = L.icon({
				iconUrl: './wreck.png',
				iconSize: [21, 32], // size of the icon
				popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
			});
			// fire
			var fireIcon = L.icon({
				iconUrl: './fire.png',
				iconSize: [21, 32], 
				popupAnchor: [-4, -80]
			});
			// lock
			var lockIcon = L.icon({
				iconUrl: './robber.png',
				iconSize: [21, 32], 
				popupAnchor: [-4, -80]
			});
			// harzard
			var harzardIcon = L.icon({
			iconUrl: './harazard.png',
 
				iconSize: [21, 32], 
				popupAnchor: [-4, -80]
			});
			// gun
			var gunIcon = L.icon({
				iconUrl: './public/gun.png',
				iconSize: [21, 32], 
				popupAnchor: [-4, -80]
			});


			var eventType = ['wreck', 'fire', 'robber', 'harzard','gun'];
			//var carArray = this.props.car;
			// var fireArray = 
			// var markerArray = this.props.SAMPLE_DATA;
			// for(var i = 0; i < eventType.length; i++){
			// 	markerArray.forEach(function (marker) {
			// 		L.marker([marker.lat, marker.long], { icon: carIcon }).addTo(map).bindPopup(marker.name + ": " + marker.date);
			// 	});
			// }

			var markerArray = this.props.marker;
			markerArray.forEach(function (marker){
				L.marker(marker.location[0], marker.location[1], {icon: gunIcon}).addTo(map).bindPopup("Car crash: Jan 28, 2017");
			});
			

			return this.setState({
				map: map
			});
		}, 100)
	}

	render() {

		return <div id="map" style={{ height: 500 }}>
		</div>;
	}
}

export default Map;