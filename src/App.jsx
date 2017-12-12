import React, {Component} from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';

import 'typeface-roboto'
import AdminDashboard from "./components/admin/dashboard/AdminDashboard.component";
import Main from "./components/main/Main.component";

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path={'/admin'} component={AdminDashboard}/>
                    <Route path={'/'} component={Main}/>
                </Switch>
            </div>
        )
    }
}

export default App;
