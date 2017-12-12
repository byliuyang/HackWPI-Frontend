import React, {Component} from 'react';
import './FAQ.component.css';
import question from './question.svg';

class FAQ extends Component {
    constructor(props) {
        super(props);
        this.state = props.data;
    }


    _createDangerousHTML(text) {
        return {__html: text};
    }

    _createQA(qa, index) {
        return (
            <li key={index}>
                <div className={'question'}>{qa.question}</div>
                <div className={'answer'} dangerouslySetInnerHTML={this._createDangerousHTML(qa.answer)}/>
            </li>
        );
    }

    render() {
        return (
            <div className={'faq'}>
                <div className={'center'}>
                    <img className={'question-img'} src={question}/>
                    <h1>FAQ</h1>
                    <div className={'questions'}>
                        <ul>
                            {this.state.leftColumn.map((qa, index) => this._createQA(qa, index))}
                        </ul>
                        <ul>
                            {this.state.rightColumn.map((qa, index)  => this._createQA(qa, index))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default FAQ;