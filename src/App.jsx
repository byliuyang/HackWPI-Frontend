import React, {Component} from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';

import 'typeface-roboto'
import AdminDashboard from "./components/admin/dashboard/AdminDashboard.component";
import Main from "./components/main/Main.component";
import AdminSignIn from "./components/admin/signin/AdminSignIn.component";
import PrivateRoute from "./components/shared/PrivateRoute/PrivateRoute.component";
import authenticationService from './services/Authentication.service';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path={'/sign-in'} component={AdminSignIn}/>
                    <PrivateRoute authenticated={authenticationService.isAuthenticated()} signIn={'/sign-in'} path={'/admin'} component={AdminDashboard}/>
                    <Route path={'/'} component={Main}/>
                </Switch>
            </div>
        )
    }
}

export default App;
