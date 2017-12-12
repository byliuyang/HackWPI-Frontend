import React, {Component} from 'react';
import './Home.component.css';
import Banner from "./banner/Banner.component";
import Introduction from "./introduction/Introduction.component";

import mlhLogo from './icons/mlh_logo.svg';
import slackIcon from './icons/slack_logo.svg';
import devpostIcon from './icons/devpost_logo.svg';

import learnIcon from './icons/learn.svg';
import hackIcon from './icons/hack.svg';
import competeIcon from './icons/compete.svg';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            banner: {
                mlhLogo: mlhLogo,
                date: 'January 12-14, 2018',
                buttons: [
                    {
                        name: 'Apply Now',
                        link: 'http://hack.wpi.edu/register',
                        color: 'orange'
                    },
                    {
                        name: 'Devpost',
                        link: 'https://hack-wpi-2017-4612.devpost.com',
                        color: 'gray'
                    }
                ],
                links: [
                    {
                        icon: slackIcon,
                        name: 'Join Slack',
                        url: 'http://hack.wpi.edu/register'
                    },
                    {
                        icon: devpostIcon,
                        name: 'Project Gallery',
                        url: 'https://hack-wpi.devpost.com/submissions'
                    }
                ]
            },
            introduction: [
                {
                    icon: learnIcon,
                    title: 'Learn',
                    description: `Participate in the workshops taught by experienced students and learn everything you need to take your project from idea to reality. Ask currently employed Mentors for help when needed.`
                },
                {
                    icon: hackIcon,
                    title: 'Hack',
                    description: `Work all weekend long to build and hack your project together. We provide food, snacks, drinks, and entertainment; everything you need to stay focused and have fun for the whole event.`
                },
                {
                    icon: competeIcon,
                    title: 'Compete',
                    description: `Present your project at the end of the hackathon to our panel of judges, and win various prizes! Grand prizes are available for the top three teams, the best overall, the best software, and the best hardware project. Additionally, smaller prizes will also be available for various categories.`
                }
            ]
        }

    }

    render() {
        return (
            <div id={'home'}>
                <Banner data={this.state.banner}/>
                <Introduction data={this.state.introduction}/>
            </div>)
    }
}

export default Home;