import React, {Component} from 'react';

import logo from './logo.svg';
import './NavBar.component.css';
import {withRouter} from "react-router-dom";

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: props.selected || 0,
            tabs: props.tabs
        };
    }

    _createTab(tab, key) {
        return (
            <li className={`${this.state.selected === key ? 'selected' : ''}`}
                key={key}
                onClick={() => {
                    this._switchTab(key);
                }}>
                {tab.name}
            </li>
        );
    }

    _switchTab(i) {
        this.props.history.push(this.state.tabs[i].path);
        this.setState(Object.assign({}, this.state, {
            selected: i
        }));
    }

    render() {
        return (
            <nav>
                <div className="center">
                    <img src={logo}/>
                    <ul>
                        {this.state.tabs.map((tab, i) =>
                            this._createTab(tab, i))}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default withRouter(NavBar);