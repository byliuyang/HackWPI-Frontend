import React, {Component} from 'react';
import './Banner.component.css';

import techGoat from './tech_goat.svg';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = props.data
    }

    render() {
        return (
            <div className={'banner'}>
                <img className={'mlh-logo'} src={this.state.mlhLogo}/>
                <div className={'center'}>
                    <img className={'tech-goat-img'} src={techGoat}/>
                    <img className={'hack-wpi-logo-img'} src={this.state.hackWPILogo}/>
                    <div className={'content'}>
                        <div className={'date'}>{this.state.date}</div>
                        <ul className={'buttons'}>
                            {
                                this.state.buttons.map(button => (
                                    <a href={button.link}>
                                        <li className={button.color}>
                                            {button.name}
                                        </li>
                                    </a>)
                                )
                            }
                        </ul>
                        <ul className={'links'}>
                            {
                                this.state.links.map(link => (
                                        <li>
                                            <img src={link.icon}/>
                                            <a href={link.url}>
                                                {link.name}
                                            </a>
                                        </li>
                                    )
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>);
    }
}

export default Banner;