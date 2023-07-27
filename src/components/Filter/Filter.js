import {Component} from 'react';

import './Filter.css';

class Filter extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    handleInput = (e) => {
        let input = e.target.value;
        if (input === '') {
            input = 'All';
        }
        this.setState(({input}));
        this.props.onFilter(input);  
    }

    render() {

        let filters = Array.from(new Set(this.props.data.map( (card) => {
            return card.descr;
        })));
        filters.unshift('All')
        const buttons = filters.map((filter) => {
            const isActive = this.props.activeFilter === filter;
            const clazz = isActive ? 'btn active' : 'btn';
            return (
                <button key={filter} className={clazz} onClick={() => this.props.onFilter(filter)}>{filter}</button>
            )
        });
        

        return (
            <div>
                <span>Looking for</span>
                <input type="text" placeholder="start typing here..." onChange={this.handleInput}></input>
                <span className='forButtons'>Or filter</span>
                {buttons}
            </div>
        )
    } 

    
}

export default Filter;