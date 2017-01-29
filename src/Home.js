import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
import { Form, FormControl, InputGroup, Button, Glyphicon, Grid, Row, Col } from 'react-bootstrap';

class Home extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {

		return (
			<div className="Home">

				<div className="Event-header">
					<h2 className="block-font"></h2>
				</div>
				<div>
					<main>
						<div id="wrap">
							<div id="mapBox">
								<h2>Events Near You</h2>
								<div id="map"><img className="mapImg" src="https://i.imgur.com/i8Q6LzV.png" /></div>
								<h2>Location: <textarea value="98105"></textarea></h2>
							</div>
							<div id="events">
								<h2>Latest Events</h2>
								<div className="event">
									<img className="icon" src="https://cdn4.iconfinder.com/data/icons/mobile-app-icons/512/fire.png" />
									<div className="eventDiscription">Lorem ipsum dolor sit amet, nulla corpora perpetua est no, prompta tractatos id eos, aliquam eloquentiam in per. Adversarium conclusionemque in mel. Dolore copiosae eu sit. In mei modo facete invenire. Ei diceret adolescens quo, ut sea appareat sapientem percipitur. Per ne everti sapientem evertitur.

	Vis cu commodo habemus docendi, nec utroque oporteat expetendis ei, ad wisi idque vim. An homero verear adipisci eam, civibus referrentur duo et. Stet nominati adversarium sed no, corrumpit reprehendunt nec ad. Ex graeco discere nec, ei mel feugiat singulis atomorum, no illud aliquip argumentum mei. Amet summo mei ad. Vel cu enim probo accusam, molestie sapientem ei sea.</div>
								</div>
								<div className="event">
									<img className="icon" src="https://d30y9cdsu7xlg0.cloudfront.net/png/40328-200.png" />
									<div className="eventDiscription">Lorem ipsum dolor sit amet, nulla corpora perpetua est no, prompta tractatos id eos, aliquam eloquentiam in per. Adversarium conclusionemque in mel. Dolore copiosae eu sit. In mei modo facete invenire. Ei diceret adolescens quo, ut sea appareat sapientem percipitur. Per ne everti sapientem evertitur.

	Vis cu commodo habemus docendi, nec utroque oporteat expetendis ei, ad wisi idque vim. An homero verear adipisci eam, civibus referrentur duo et. Stet nominati adversarium sed no, corrumpit reprehendunt nec ad. Ex graeco discere nec, ei mel feugiat singulis atomorum, no illud aliquip argumentum mei. Amet summo mei ad. Vel cu enim probo accusam, molestie sapientem ei sea.</div>
								</div>
								</div>
							</div>
					</main>
				</div>

			</div>
		);
	}
}


export default Home;