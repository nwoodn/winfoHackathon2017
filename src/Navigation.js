
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
                    <h1 className="block-font">Shit that goes wrong</h1>
                </div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
						<Navbar.Brand>
							<a href="#">Crisis Crowd</a>
						</Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer to="/map"><NavItem>Map</NavItem></LinkContainer>
                            <LinkContainer to="/events"><NavItem>Events</NavItem></LinkContainer>
                            <LinkContainer to="/reportincident"><NavItem>Report Incident</NavItem></LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>


            </div>
        );

    }
}

export default Navigation;