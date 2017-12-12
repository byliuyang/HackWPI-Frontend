class AppStateService {
    constructor() {
        this.appState = {
            nav: {
                selected: 0,
                tabs: [
                    {name: 'Home', path: '/'},
                    {name: 'Day Of', path: '/day-of'},
                    {name: 'Map', path: ''},
                    {name: 'Schedule', path: ''},
                    {name: 'Prizes', path: ''},
                    {name: 'Hardware List', path: ''}
                ]
            },
            footer: {
                organizerLogo: '/assets/images/logos/acm_logo.svg',
                acknowledgement: 'Designed by Yang Liu. Graphical vectors created by Ikatod and Freepik - Freepik.com'
            },
            pages: {
                home: {
                    banner: {
                        hackWPILogo: '/assets/images/logos/hackwpi_logo.svg',
                        mlhLogo: '/assets/images/logos/mlh_logo.svg',
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
                                icon: '/assets/images/logos/slack_logo.svg',
                                name: 'Join Slack',
                                url: 'http://hack.wpi.edu/register'
                            },
                            {
                                icon: '/assets/images/logos/devpost_logo.svg',
                                name: 'Project Gallery',
                                url: 'https://hack-wpi.devpost.com/submissions'
                            }
                        ]
                    },
                    introduction: {
                        rows: [
                            {
                                icon: '/assets/images/icons/learn.svg',
                                title: 'Learn',
                                description: `Participate in the workshops taught by experienced students and learn everything you need to take your project from idea to reality. Ask currently employed Mentors for help when needed.`
                            },
                            {
                                icon: '/assets/images/icons/hack.svg',
                                title: 'Hack',
                                description: `Work all weekend long to build and hack your project together. We provide food, snacks, drinks, and entertainment; everything you need to stay focused and have fun for the whole event.`
                            },
                            {
                                icon: '/assets/images/icons/compete.svg',
                                title: 'Compete',
                                description: `Present your project at the end of the hackathon to our panel of judges, and win various prizes! Grand prizes are available for the top three teams, the best overall, the best software, and the best hardware project. Additionally, smaller prizes will also be available for various categories.`
                            }
                        ]
                    },
                    faq: {
                        leftColumn: [
                            {
                                question: 'What is a hackathon?',
                                answer: 'A hackathon is where you turn your crazy ideas into real stuff. Hundreds of hackers from across the globe gather and build something they’re passionate about; come, dive in, and make the most incredible things you can imagine alongside fellow creators. You take care of building. We’ll take care of you.'
                            },
                            {
                                question: 'Who can come?',
                                answer: 'HACK@WPI applications are open to any enrolled college student (undergrad or grad), from all over the world.'
                            },
                            {
                                question: 'What if I don’t know how to code?',
                                answer: 'HACK@WPI is the perfect time and place to learn. We provide code “starter packs,” as well as great workshops and mentors to help you build something you can be proud of by the end of the weekend.'
                            },
                            {
                                question: 'What should I bring?',
                                answer: 'All you need is a valid student ID and a laptop. We provide the rest! (A change of clothes and a pillow and/or sleeping bag is recommended, though.)'
                            },
                            {
                                question: 'What can I build?',
                                answer: 'Anything your heart desires! Hardware, web, mobile, gaming; you name it, we’ll support it.'
                            }
                        ],
                        rightColumn: [
                            {
                                question: 'What about hardware?',
                                answer: 'We’ll have a hardware lounge with plenty of boards, tools, and gadgets for you to check out!'
                            },
                            {
                                question: 'What if I’m a WPI student?',
                                answer: 'Any WPI student that fills out the WPI registration (will be released in December) and confirms by January 1st will be guaranteed admission.'
                            },
                            {
                                question: 'What does it cost?',
                                answer: 'HACK@WPI is free for all accepted hackers. We provide meals, caffeine, swag, workspace, and WiFi for the weekend; unfortunately, travel reimbursements or bussing will not be available for qualifying hackers.'
                            },
                            {
                                question: 'What is the HACK@WPI code of conduct?',
                                answer: 'You can read it <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">here</a>.'
                            },
                            {
                                question: 'I have some other question!',
                                answer: 'Email us at <a href="mailto:hack@wpi.edu">hack@wpi.edu</a>. We gotchu.'
                            }
                        ]
                    },
                    sponsors: {
                        rows: [
                            [
                                '/assets/images/logos/google.png',
                                '/assets/images/logos/microsoft.svg',
                                '/assets/images/logos/facebook.png'
                            ]
                        ]
                    }
                }
            }
        }
    }

    getAppState() {
        return ({
            nav: this.appState.nav,
            footer: this.appState.footer
        });
    }

    getHomepageState() {
        return this.appState.pages.home;
    }
}

export default new AppStateService();
