import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import {FormControl} from 'material-ui/Form';
import Input, {InputLabel} from 'material-ui/Input';
import {withStyles} from 'material-ui/styles';

import authenticationService from './../../../services/Authentication.service';

import './AdminSignIn.component.css';
import {withRouter} from "react-router-dom";
import {Button, Snackbar} from "material-ui";

const styles = theme => ({
    inputLabelFocused: {
        color: '#BA3F3F',
    },
    inputInkbar: {
        '&:after': {
            backgroundColor: '#BA3F3F',
        },
    }
});

class AdminSignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            snackBar: {
                open: false,
                message: ''
            },
            email: '',
            password: ''
        };
        this.classes = props.classes;
    }

    _textChange(name) {
        return (event) => {
            this.setState({
                [name]: event.target.value
            })
        };
    }

    _signIn() {
        authenticationService.authenticate(this.state.email, this.state.password)
            .then(() => {
                this.props.history.push('/admin');
            }, () => {
                this._showSnackBar('Username or password is incorrect')();
            });
    }

    _showSnackBar(message) {
        return () => {
            this.state.snackBar.message = message;
            this.state.snackBar.open = true;
            this.setState(this.state);
        }
    }

    _closeSnackBar() {
        this.state.snackBar.open = false;
        this.setState(this.state);
    }

    componentWillMount() {
        if (authenticationService.isAuthenticated()) {
            console.log('authenticated');
            this.props.history.push('/admin');
        }
    }

    render() {
        return (
            <div className={'admin-sign-in'}>
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <Grid item xs={12} sm={3}>
                            <Paper className={'sign-in-box'}>
                                <h1>Hack Admin</h1>
                                <div className={'sign-in-form'}>
                                    <FormControl className={'row'}>
                                        <InputLabel
                                            FormControlClasses={{focused: this.classes.inputLabelFocused}}
                                            htmlFor="email-input">
                                            Email
                                        </InputLabel>
                                        <Input
                                            value={this.state.email}
                                            onChange={this._textChange('email')}
                                            id="email-input"
                                            classes={{
                                                inkbar: this.classes.inputInkbar,
                                            }}
                                        />
                                    </FormControl>
                                    <FormControl className={'row'}>
                                        <InputLabel FormControlClasses={{focused: this.classes.inputLabelFocused}}>
                                            Password
                                        </InputLabel>
                                        <Input
                                            value={this.state.password}
                                            onChange={this._textChange('password')}
                                            classes={{
                                                inkbar: this.classes.inputInkbar,
                                            }}
                                            type={'password'}
                                        />
                                    </FormControl>
                                    <div className={'sign-in-button row'} onClick={() => {
                                        this._signIn()
                                    }}>
                                        Sign In
                                    </div>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Snackbar
                    anchorOrigin={{vertical: 'top', horizontal: 'center'}}
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

export default withStyles(styles)(withRouter(AdminSignIn));