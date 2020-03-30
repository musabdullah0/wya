import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
        };
    }
    toggleNavbar() {
        console.log('toggle pressed')
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark transparent-nav">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">Study Mode</NavLink>
                    <button 
                        onClick={this.toggleNavbar} className={`${classTwo}`} 
                        type="button" data-toggle="collapse" data-target="#navbarResponsive" 
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <SignedInLinks 
                        containerClasses={`${classOne}`} 
                        toggleNavbar = {this.toggleNavbar}
                    />
                    <SignedOutLinks />
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
}

export default connect(mapStateToProps)(Navbar);