import {Component} from 'react';

import Header from '../Header/Header';
import About from '../About/About';
import Cards from '../Cards/Cards';
import Filter from '../Filter/Filter';


class OurCoffee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataForCards: [
                {id: 0, title: 'Solimo Coffee Beans 2kg', descr:'Ukraine',  price: '10.73$', imgUrl: 'https://imgur.com/kz8BmO1.png'},
                {id: 1, title: 'Presto Coffee Beans 1kg', descr:'Columbia', price: '15.99$', imgUrl: 'https://imgur.com/LZjF5Su.png'},
                {id: 2, title: 'AROMISTICO Coffee 1kg', descr:'Brazil', price: '6.99$', imgUrl: 'https://imgur.com/7CtoR8V.png'},
                {id: 3, title: 'Solimo Coffee Beans 2kg', descr:'Ukraine',  price: '10.73$', imgUrl: 'https://imgur.com/kz8BmO1.png'},
                {id: 4, title: 'Presto Coffee Beans 1kg', descr:'Columbia', price: '15.99$', imgUrl: 'https://imgur.com/LZjF5Su.png'},
                {id: 5, title: 'AROMISTICO Coffee 1kg', descr:'Brazil', price: '6.99$', imgUrl: 'https://imgur.com/7CtoR8V.png'},
            ],
            descr1: 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.',
            descr2: `Afraid at highly months do things on at. Situation recommend objection do intention
            so questions. 
            As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.`,
            filter: 'All' 
        }
    }

    onFilter = (filter) => {
        this.setState(({filter}));
    }

    activeCards = (filter, data) => {
        if (filter === 'All') {
          return data;
        } else {
          return data.filter(card => card.descr === filter 
                                     || card.title.toLowerCase().indexOf(filter.toLowerCase()) > -1 
                                     || card.descr.toLowerCase().indexOf(filter.toLowerCase()) > -1);
        }
      }

    render() {
        const dataForCards = this.state.dataForCards,
              descr1 = this.state.descr1,
              descr2 = this.state.descr2,
              filter = this.state.filter,
              activeCards = this.activeCards(filter, dataForCards);
        return (                
            <>
                <Header 
                    imgUrl='https://imgur.com/lOfO0a9.png' 
                    title='Our Coffee' />
                <About 
                    title='About our beans' 
                    descr1={descr1} 
                    descr2={descr2} 
                    imgUrl={'https://imgur.com/BydM0Ow.jpg'} />
                <img 
                    src='https://imgur.com/q4z35gL.png' 
                    alt='line' />
                <Filter 
                    data={dataForCards} 
                    activeFilter={filter}
                    onFilter={this.onFilter} />
                <Cards 
                    data={activeCards} />
            </>
            );
    }
}

export default OurCoffee;