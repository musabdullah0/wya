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
import { signOut } from '../../store/actions/authActions'



const createNavItem = ({ href, text, className, onClick }, i) => (
    <NavItem  key={i}>
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
            { href: '/create' , text: 'study'},
            { href: '/add-friend' , text: 'add friend'},
            { href: '/about' , text: 'about'},
            { href: '/contact' , text: 'contact'},
            { href: '#' , text: 'logout', onClick: props.signOut},
        ]
        this.signedOutLinks = [
            { href: '/login' , text: 'log in'},
            { href: '/signup' , text: 'sign up'},
        ]
    }
    toggleNavbar = () => {
        this.setState({
            expanded: !this.state.expanded,
        });
    }
    render() {
        return (
            <div className="container">
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">studymode</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} />
                    <Collapse isOpen={this.state.expanded} navbar>
                        <Nav className="ml-auto" navbar>
                            {this.signedInLinks.map(createNavItem)}
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

const mapDispatchToProps=(dispatch)=>{
    return {
      signOut: () => dispatch(signOut())
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Navigation);