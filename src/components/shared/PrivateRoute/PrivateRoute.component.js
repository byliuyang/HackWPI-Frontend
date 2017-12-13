import {Redirect, Route} from "react-router-dom";
import React, {Component} from "react";

function PrivateRoute({component: Component, authenticated, signIn, ...rest}) {
    return (
        <Route
            {...rest}
            render={props => {
                return authenticated === true ?
                <Component {...props}/> :
                <Redirect to={{
                    pathname: signIn,
                    state: {from: props.location}
                }}/>}
            }
        />
    );
}

export default PrivateRoute;