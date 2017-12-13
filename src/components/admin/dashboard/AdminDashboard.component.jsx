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
import SaveIcon from "material-ui-icons/Save";
import authenticationService from './../../../services/Authentication.service';
import {
    Button,
    FormControl,
    Input,
    InputLabel,
    Snackbar,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    withStyles
} from "material-ui";
import green from "material-ui/es/colors/green";
import Switch from "material-ui/es/Switch/Switch";

const styles = theme => ({
    inputLabelFocused: {
        color: '#BA3F3F',
    },
    inputInkbar: {
        '&:after': {
            backgroundColor: '#BA3F3F',
        },
    },
    bar: {},
    checked: {
        color: green[500],
        '& + $bar': {
            backgroundColor: green[500],
        },
    },
});

class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            snackBar: {
                open: false,
                message: ''
            },
            tabs: {
                currentIndex: 1,
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
            },
            dashboard: {},
            common: {
                favicon: "/assets/favicon.jpg",
                nav: {
                    logo: "/assets/images/logos/logo.svg",
                    selected: 0,
                    tabs: [
                        {
                            name: "Home",
                            path: "/",
                            enabled: true
                        },
                        {
                            name: "Day Of",
                            path: "/day-of",
                            enabled: false
                        },
                        {
                            name: "Map",
                            path: "",
                            enabled: false
                        },
                        {
                            name: "Schedule",
                            path: "",
                            enabled: false
                        },
                        {
                            name: "Prizes",
                            path: "",
                            enabled: false
                        },
                        {
                            name: "Hardware List",
                            path: "",
                            enabled: false
                        }
                    ]
                },
                footer: {
                    organizerLogo: "/assets/images/logos/acm_logo.svg",
                    acknowledgement: "Designed by Yang Liu. Graphical vectors created by Ikatod and Freepik - Freepik.com"
                }
            },
            home: {},
            dayOf: {},
            map: {},
            schedule: {},
            prizes: {},
            hardwareList: {}
        };
        this.classes = props.classes;
    }

    _saveContent() {
        switch (this.state.tabs.currentIndex) {
            case 1:
                this.state.snackBar.message = 'Common settings saved';
                break;
        }

        this.state.snackBar.open = true;
        this.setState(this.state);
    }

    _closeSnackBar() {
        this.state.snackBar.open = false;
        this.setState(this.state);
    }

    _switchTab(event, value) {
        this.state.tabs.currentIndex = value;
        this.setState(this.state);
    }

    _signOut() {
        authenticationService.signOut();
        this.props.history.push('/sign-in');
    }

    _valueChange(dictionary, key, value) {
        return (event) => {
            dictionary[key] = event.target[value];
            this.setState(this.state);
        };
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
                            <Avatar
                                src={'https://scontent.fzty2-1.fna.fbcdn.net/v/t1.0-9/12308259_753900598089381_803897555683033169_n.jpg?oh=fe47206f4ea9e55490644cad4e6d9430&oe=5AC89826'}/>
                            <div className={'user-name'}>Harry Liu</div>
                            <img className={'sign-out'} src={takeoffIcon} onClick={() => {
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
                        <div className={'content'}>
                            <h1>Basic</h1>
                            <Paper className={'group'}>
                                <div className={'row'}>
                                    <FormControl className={'control'}>
                                        <InputLabel
                                            FormControlClasses={{focused: this.classes.inputLabelFocused}}
                                            htmlFor="common-favicon-url-input">
                                            Favicon URL
                                        </InputLabel>
                                        <Input
                                            value={this.state.common.favicon}
                                            onChange={this._valueChange(this.state.common, 'favicon', 'value')}
                                            id="common-favicon-url-input"
                                            classes={{
                                                inkbar: this.classes.inputInkbar,
                                            }}
                                        />
                                    </FormControl>
                                    <img className={'preview'} src={this.state.common.favicon}/>
                                </div>
                            </Paper>

                            <h1>Navigation Bar</h1>
                            <Paper className={'group'}>
                                <div className={'row'}>
                                    <FormControl className={'control'}>
                                        <InputLabel
                                            FormControlClasses={{focused: this.classes.inputLabelFocused}}
                                            htmlFor="common-logo-url-input">
                                            Logo URL
                                        </InputLabel>
                                        <Input
                                            value={this.state.common.nav.logo}
                                            onChange={this._valueChange(this.state.common.nav, 'logo', 'value')}
                                            id="common-logo-url-input"
                                            classes={{
                                                inkbar: this.classes.inputInkbar,
                                            }}
                                        />
                                    </FormControl>
                                    <img className={'preview red'} src={this.state.common.nav.logo}/>
                                </div>
                                <div className={'row'}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Title</TableCell>
                                                <TableCell>URL</TableCell>
                                                <TableCell>Enabled</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {this.state.common.nav.tabs.map((tab, index) => {
                                                return (
                                                    <TableRow key={index}>
                                                        <TableCell>
                                                            <Input
                                                                value={tab.name}
                                                                onChange={this._valueChange(tab, 'name', 'value')}
                                                                // className={classes.input}
                                                                inputProps={{
                                                                    'aria-label': 'Description',
                                                                }}
                                                            />
                                                        </TableCell>
                                                        <TableCell>
                                                            <Input
                                                                value={tab.path}
                                                                onChange={this._valueChange(tab, 'path', 'value')}
                                                                // className={classes.input}
                                                                inputProps={{
                                                                    'aria-label': 'Description',
                                                                }}
                                                            />
                                                        </TableCell>
                                                        <TableCell>
                                                            <Switch
                                                                classes={{
                                                                    checked: this.classes.checked,
                                                                    bar: this.classes.bar,
                                                                }}
                                                                checked={tab.enabled}
                                                                onChange={this._valueChange(tab, 'enabled', 'checked')}
                                                                // onChange={this.handleChange('checkedE')}
                                                                // aria-label="checkedD"
                                                            />
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                        </TableBody>
                                    </Table>
                                </div>
                            </Paper>

                            <h1>Footer</h1>
                            <Paper className={'group'}>
                                <div className={'row'}>
                                    <FormControl className={'control'}>
                                        <InputLabel
                                            FormControlClasses={{focused: this.classes.inputLabelFocused}}
                                            htmlFor="common-organizer-logo-url-input">
                                            Organizer Logo URL
                                        </InputLabel>
                                        <Input
                                            value={this.state.common.footer.organizerLogo}
                                            onChange={this._valueChange(this.state.common.footer, 'organizerLogo', 'value')}
                                            id="common-organizer-logo-url-input"
                                            classes={{
                                                inkbar: this.classes.inputInkbar,
                                            }}
                                        />
                                    </FormControl>
                                    <img className={'preview dark'} src={this.state.common.footer.organizerLogo}/>
                                </div>
                                <div className={'row'}>
                                    <FormControl className={'control'}>
                                        <InputLabel
                                            FormControlClasses={{focused: this.classes.inputLabelFocused}}
                                            htmlFor="common-acknowledgement-input">
                                            Acknowledgement
                                        </InputLabel>
                                        <Input
                                            value={this.state.common.footer.acknowledgement}
                                            onChange={this._valueChange(this.state.common.footer, 'acknowledgement', 'value')}
                                            id="common-acknowledgement-input"
                                            classes={{
                                                inkbar: this.classes.inputInkbar,
                                            }}
                                        />
                                    </FormControl>
                                </div>
                            </Paper>
                        </div>
                    </div>
                    <div className={'tab-content'}>Home</div>
                    <div className={'tab-content'}>Day Of</div>
                    <div className={'tab-content'}>Map</div>
                    <div className={'tab-content'}>Schedule</div>
                    <div className={'tab-content'}>Prizes</div>
                    <div className={'tab-content'}>Hardware List</div>
                </SwipeableViews>
                <Button fab color="accent" className={'save-button'} onClick={() => {
                    this._saveContent();
                }}>
                    <SaveIcon/>
                </Button>
                <Snackbar
                    anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                    open={this.state.snackBar.open}
                    SnackbarContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.state.snackBar.message}</span>}
                    action={
                        <Button color="accent" dense onClick={() => {
                            this._closeSnackBar();
                        }}>
                            OK
                        </Button>
                    }
                />
            </div>
        );
    }
}

export default withStyles(styles)(AdminDashboard);