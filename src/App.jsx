import React, {Component} from 'react';
import Favicon from 'react-favicon';
import './App.css';
import NavBar from './components/nav-bar/NavBar.component';
import {Route, Switch} from 'react-router-dom';
import Home from "./components/home/Home.component";
import Footer from "./components/footer/Footer.component";
import appStateService from './services/App.state.service';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = appStateService.getAppState();
    }

    render() {
        return (
            <div>
                <Favicon url={this.state.favicon} />
                <header>
                    <NavBar tabs={this.state.nav.tabs}/>
                </header>
                <Switch>
                    <Route path={'/'} component={Home}/>
                </Switch>
                <footer>
                    <Footer data={this.state.footer}/>
                </footer>
            </div>

        );
    }
}

export default App;
