import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav } from 'reactstrap';
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

const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
}


export default connect(mapStateToProps)(Navigation);