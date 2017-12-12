import React, {Component} from 'react';
import './Introduction.component.css';
import brainImage from './brain.svg';

class Introduction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: props.data
        }
    }

    _createRow(row, index) {
        return (
            <li key={index}>
                <div className={'title'}>
                    <img src={row.icon}/>
                    <div>{row.title}</div>
                </div>
                <div className={'description'}>
                    {row.description}
                </div>
            </li>)
    }

    render() {
        return (
            <div className={'introduction'}>
                <div className={'center'}>
                    <img className={'brain-img'} src={brainImage}/>
                    <ul>
                        {this.state.rows.map((row, index) => this._createRow(row, index))}
                    </ul>
                </div>
            </div>);
    }
}

export default Introduction;