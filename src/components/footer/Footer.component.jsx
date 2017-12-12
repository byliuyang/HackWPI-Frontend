import React, {Component} from 'react';
import './Footer.component.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = props.data
    }
    render() {
        return (
            <div>
            <div className={'organizer-logo'}>
                <img src={this.state.organizerLogo}/>
            </div>
                <div className={'acknowledgement'}>
                    {this.state.acknowledgement}
                </div>
            </div>);
    }
}

export default Footer;