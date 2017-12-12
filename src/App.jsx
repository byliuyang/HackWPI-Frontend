import React, {Component} from 'react';
import './App.css';
import NavBar from './components/nav-bar/NavBar.component';
import {Route, Switch} from 'react-router-dom';
import Home from "./components/home/Home.component";
import DayOf from "./components/day-of/DayOf.component";
import Footer from "./components/footer/Footer.component";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav: {
                selected: 0,
                tabs: [
                    {name: 'Home', path: '/'},
                    {name: 'Day Of', path: '/day-of'},
                    {name: 'Map', path: ''},
                    {name: 'Schedule', path: ''},
                    {name: 'Prizes', path: ''},
                    {name: 'Hardware List', path: ''}
                ]
            },
            footer: {
                acknowledgement: 'Designed by Yang Liu. Graphical vectors created by Ikatod and Freepik - Freepik.com'
            }
        }
        ;
    }

    render() {
        return (
            <div>
                <header>
                    <NavBar tabs={this.state.nav.tabs}/>
                </header>
                <Switch>
                    <Route path={'/day-of'} component={DayOf}/>
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
