import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Tabs, {Tab} from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import SwipeableViews from 'react-swipeable-views';
import './AdminDashboard.component.css';
import {Link} from "react-router-dom";
import Avatar from "material-ui/Avatar";
import takeoffIcon from "./takeoff.svg";
import authenticationService from './../../../services/Authentication.service';

class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: {
                currentIndex: 0,
                items: [
                    'Dashboard',
                    'Common',
                    'Home',
                    'Day Of',
                    'Map',
                    'Schedule',
                    'Prizes',
                    'Hardware List'
                ]
            }
        }
    }

    _switchTab(event, value) {
        this.state.tabs.currentIndex = value;
        this.setState(this.state);
    }

    _signOut() {
        authenticationService.signOut();
        this.props.history.push('/sign-in');
    }

    render() {
        return (
            <div className={'admin-dashboard'}>
                <AppBar position="static" className={'app-bar'}>
                    <Toolbar>
                        <Link to="/" className={'home-page-link'}>
                            <img className={'logo'} src={'/assets/images/logos/logo.svg'}/>
                        </Link>
                        <Typography className={'title'} type="title" color="inherit">
                            Admin Panel
                        </Typography>
                        <div className={'right-controls'}>
                            <Avatar src={'https://scontent.fzty2-1.fna.fbcdn.net/v/t1.0-9/12308259_753900598089381_803897555683033169_n.jpg?oh=fe47206f4ea9e55490644cad4e6d9430&oe=5AC89826'}/>
                            <div className={'user-name'}>Harry Liu</div>
                            <img className={'sign-out'} src={takeoffIcon} onClick={()=>{
                                this._signOut();
                            }}/>
                        </div>
                    </Toolbar>
                </AppBar>
                <AppBar position="static" color={'default'} className={'tab-bar'}>
                    <Tabs centered value={this.state.tabs.currentIndex} onChange={(event, value) => {
                        this._switchTab(event, value)
                    }} scrollable scrollButtons="off">
                        {
                            this.state.tabs.items.map((item, index) => <Tab key={index} label={item}/>)
                        }
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    index={this.state.tabs.currentIndex}>
                    <div className={'tab-content'}>Dashboard</div>
                    <div className={'tab-content'}>
                        <Paper className={'group'}>
                            <h1>Basic</h1>
                        </Paper>
                        <Paper className={'group'}>
                            <h1>Navigation Bar</h1>
                        </Paper>
                        <Paper className={'group'}>
                            <h1>Footer</h1>
                        </Paper>
                    </div>
                    <div className={'tab-content'}>Home</div>
                    <div className={'tab-content'}>Day Of</div>
                    <div className={'tab-content'}>Map</div>
                    <div className={'tab-content'}>Schedule</div>
                    <div className={'tab-content'}>Prizes</div>
                    <div className={'tab-content'}>Hardware List</div>
                </SwipeableViews>
            </div>
        );
    }
}

export default AdminDashboard;