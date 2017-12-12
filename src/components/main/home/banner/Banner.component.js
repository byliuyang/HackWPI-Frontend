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
                    <img className={'big-logo-img'} src={this.state.logo}/>
                    <div className={'content'}>
                        <div className={'date'}>{this.state.date}</div>
                        <ul className={'buttons'}>
                            {
                                this.state.buttons.map((button, index) => (
                                    <a href={button.link} key={index}>
                                        <li className={button.color}>
                                            {button.name}
                                        </li>
                                    </a>)
                                )
                            }
                        </ul>
                        <ul className={'links'}>
                            {
                                this.state.links.map((link, index) => (
                                        <li key={index}>
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