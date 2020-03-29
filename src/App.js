import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import CreateSession from './components/sessions/CreateSession'
import StudyMap from './components/map/StudyMap'


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={StudyMap} />
                    <Route path='/create' component={CreateSession} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;