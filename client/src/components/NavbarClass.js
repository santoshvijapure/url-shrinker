import React, { Component } from 'react'
import ShrinkForm from "./ShrinkForm";
import TableData from "./TableData";
import Navbar from 'react-bootstrap/Navbar';
import  {Nav} from 'react-bootstrap'

export default class NavbarClass extends Component {


        state = { 
            renderForm : true
        }

        toForm = () => {
            this.setState({
                renderForm: true
            })
            console.log(this.state.renderForm);  
        }
        toTable=()=>{
            this.setState({
                renderForm:false
            })
        }
    render() {
        return (
            <div>
              <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#" className="navbar-brand">
                URL Shrinker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" active>
                    <Nav.Link onClick={ this.toForm }  className="active"> Home</Nav.Link>
                    <Nav.Link onClick={this.toTable  } className="active"> All Links </Nav.Link>
                        <Nav.Link className="active" href="#">Sign Up </Nav.Link>
                        <Nav.Link  className="active" href="#">Log In</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div class="container">
            { this.state.renderForm? <ShrinkForm/>:<TableData/>}  
            

            </div>
            
            
            </div>
        
            )
        }
    
    }