import React, {Component} from 'react';
import './Home.component.css';
import Banner from './banner/Banner.component';
import Introduction from './introduction/Introduction.component';

import FAQ from './faq/FAQ.component';
import Sponsors from './sponsors/Sponsors.component';

import appStateService from '../../services/App.state.service';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = appStateService.getHomepageState();
    }

    render() {
        return (
            <div id={'home'}>
                <Banner data={this.state.banner}/>
                <Introduction data={this.state.introduction}/>
                <FAQ data={this.state.faq}/>
                <Sponsors data={this.state.sponsors}/>
            </div>)
    }
}

export default Home;