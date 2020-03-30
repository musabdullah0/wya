import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav } from 'reactstrap';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: true,
        };
    }
    toggleNavbar = () => {
        console.log('toggle pressed')
        this.setState({
            expanded: !this.state.expanded,
        });
    }
    render() {
        return (
            <div className="container">
            <Navbar color="faded" light expand="md" className="pb-2">
                <NavbarBrand href="/" className="mr-auto">studymode</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2 white" />
                <Collapse isOpen={!this.state.expanded} navbar>
                <Nav navbar>
                    <SignedInLinks />
                    <SignedOutLinks />
                </Nav>
                </Collapse>
            </Navbar>
            </div>
        );
    }
}


export default Navigation;