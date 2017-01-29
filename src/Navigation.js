
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { LinkContainer } from 'react-router-bootstrap';
import './Navigation.css';
import React, {Component} from 'react';

class Navigation extends React.Component {
    render() {

        return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Bungee" rel="stylesheet" />
                <div id="container">
                    <h1 className="block-font">Crisis Crowd</h1>
                </div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
						<Navbar.Brand>
							<a href="#">Home</a>
						</Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer to="/map" className="button"><NavItem>Map</NavItem></LinkContainer>
                            <LinkContainer to="/events" className="button"><NavItem>Log In</NavItem></LinkContainer>
                            <LinkContainer to="/reportincident" className="button"><NavItem>Add Event</NavItem></LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>


            </div>
        );

    }
}

export default Navigation;