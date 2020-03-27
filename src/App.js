import React, { Component } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar'


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Switch>

                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;