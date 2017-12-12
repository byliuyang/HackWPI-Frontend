import React, {Component} from 'react';
import DocumentTitle from 'react-document-title';

import './Home.component.css';
import Banner from './banner/Banner.component';
import Introduction from './introduction/Introduction.component';

import FAQ from './faq/FAQ.component';
import Sponsors from './sponsors/Sponsors.component';

import appStateService from '../../services/App.state.service';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };

        appStateService.getHomepageState().then(state => {
            this.setState(Object.assign({}, state, {
                loading: false
            }));
        });
    }

    render() {
        if (this.state.loading)
            return (<div>Loading</div>);
        else
            return (
                <DocumentTitle title={this.state.title}>
                    <div id={'home'}>
                        <Banner data={this.state.banner}/>
                        <Introduction data={this.state.introduction}/>
                        <FAQ data={this.state.faq}/>
                        <Sponsors data={this.state.sponsors}/>
                    </div>
                </DocumentTitle>);
    }
}

export default Home;