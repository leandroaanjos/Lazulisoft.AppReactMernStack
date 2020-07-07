import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { APP_TITLE } from '../appConstants';

export default class Header extends Component {
    render() {
        return (
            <header className="App-Header">
                <Navbar expand="lg" bg="bg-primary bd-navbar" variant="dark">
                    <Container>
                        <Navbar.Brand><Link to="/student-list">{APP_TITLE}</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarNav" />
                        <Navbar.Collapse id="navbarNav">
                            <Nav className="mr-auto">
                                <Nav.Item>
                                    <NavLink exact to={"/student-list"} className="nav-link" activeClassName="active">Students</NavLink>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        )
    }
}
