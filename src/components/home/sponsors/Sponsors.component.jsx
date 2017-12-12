import React, {Component} from 'react';
import './Sponsors.component.css';
import sponsorText from './sponsors.svg';
import swagImage from './swag.svg';

class Sponsors extends Component {
    constructor(props) {
        super(props);
        this.state = props.data;
    }

    render() {
        return (
            <div className={'sponsors'}>
                <div className={'center'}>
                    <div className={'title'}>
                        <img src={sponsorText}/>
                    </div>
                    <div className={'sponsor-logos'}>
                        {this.state.map(row =>
                            <ul>
                                {
                                    row.map(companyLogo =>
                                        (
                                            <li>
                                                <img src={companyLogo}/>
                                            </li>
                                        ))
                                }
                            </ul>)
                        }
                    </div>
                    <div className={'swag-image'}>
                        <img src={swagImage}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sponsors;