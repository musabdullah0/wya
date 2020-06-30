import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { connect } from 'react-redux'



const createNavItem = ({ href, text, className, onClick }, i) => (
    <NavItem key={i}>
        <NavLink href={href} className={className} onClick={onClick}>{text}</NavLink>
    </NavItem>
);

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
        this.signedInLinks = [
            { href: '/add-friend', text: 'add friend' },
            { href: '/about', text: 'about' },
            { href: '/contact', text: 'contact' },
            { href: '#', text: 'logout'},
        ]
        this.signedOutLinks = [
            { href: '/login', text: 'log in' },
            { href: '/signup', text: 'sign up' },
        ]
    }
    toggleNavbar = () => {
        this.setState({
            expanded: !this.state.expanded,
        });
    }
    render() {
        // const links = auth.uid ? this.signedInLinks : this.signedOutLinks;
        const links = this.signedInLinks;
        return (
            <div className="container">
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">studymode</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} />
                    <Collapse isOpen={this.state.expanded} navbar>
                        <Nav className="ml-auto" navbar>
                            {links.map(createNavItem)}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}



export default Navigation;