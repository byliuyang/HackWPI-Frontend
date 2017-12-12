import React, {Component} from 'react';
import './App.css';
import NavBar from './components/nav-bar/NavBar.component';
import {Route, Switch} from 'react-router-dom';
import Home from "./components/home/Home.component";
import DayOf from "./components/day-of/DayOf.component";
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
                <header>
                    <NavBar tabs={this.state.nav.tabs}/>
                </header>
                <Switch>
                    <Route path={'/'} component={Home}/>
                </Switch>
                <footer>
                    <Footer acknowledgement={this.state.footer.acknowledgement}/>
                </footer>
            </div>

        );
    }
}

export default App;
