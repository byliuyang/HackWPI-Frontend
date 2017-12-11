import React, {Component} from 'react';
import './Footer.component.css';
import acmLogo from './acm_logo.svg';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            acknowledgement: props.acknowledgement
        }
    }
    render() {
        return (
            <div>
            <div className={'organizer-logo'}>
                <img src={acmLogo}/>
            </div>
                <div className={'acknowledgement'}>
                    {this.state.acknowledgement}
                </div>
            </div>);
    }
}

export default Footer;