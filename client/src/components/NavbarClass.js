import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import  {Nav} from 'react-bootstrap'

export default class NavbarClass extends Component {



    render() {
        return (
            <div>
              <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home" className="navbar-brand">
                URL Shrinker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" active>
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">All Links </Nav.Link>


                        <Nav.Link href="#">Sign Up </Nav.Link>
                        <Nav.Link href="#">Log In</Nav.Link>
            
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        
            )
        }
    }
