import React, {Component} from 'react';
import appStateService from "../../services/AppState.service";
import Home from "./home/Home.component";
import Switch from "react-router-dom/es/Switch";
import {Route} from "react-router-dom";
import NavBar from "./nav-bar/NavBar.component";
import Footer from "./footer/Footer.component";

import Favicon from 'react-favicon';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };

        appStateService.getAppState().then(state => {
            this.setState(Object.assign({}, state, {
                loading: false
            }));
        });
    }

    render() {
        if (this.state.loading)
            return (<div></div>);
        else
            return (
                <div>
                    <Favicon url={this.state.favicon}/>
                    <header>
                        <NavBar logo={this.state.nav.logo} tabs={this.state.nav.tabs}/>
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

export default Main;