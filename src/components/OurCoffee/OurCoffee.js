import Header from '../Header/Header';
import About from '../About/About';
import Cards from '../Cards/Cards';
import Filter from '../Filter/Filter';


const OurCoffee = () => {

    const dataForCards = [
        {title: 'Solimo Coffee Beans 2kg', descr:'Ukraine',  price: '10.73$', imgUrl: 'https://imgur.com/kz8BmO1.png'},
        {title: 'Presto Coffee Beans 1kg', descr:'Columbia', price: '15.99$', imgUrl: 'https://imgur.com/LZjF5Su.png'},
        {title: 'AROMISTICO Coffee 1kg', descr:'Brazil', price: '6.99$', imgUrl: 'https://imgur.com/7CtoR8V.png'},
        {title: 'Solimo Coffee Beans 2kg', descr:'Ukraine',  price: '10.73$', imgUrl: 'https://imgur.com/kz8BmO1.png'},
        {title: 'Presto Coffee Beans 1kg', descr:'Columbia', price: '15.99$', imgUrl: 'https://imgur.com/LZjF5Su.png'},
        {title: 'AROMISTICO Coffee 1kg', descr:'Brazil', price: '6.99$', imgUrl: 'https://imgur.com/7CtoR8V.png'},
    ];

    const descr1 = 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.',
          descr2 = `Afraid at highly months do things on at. Situation recommend objection do intention
          so questions. 
          As greatly removed calling pleased improve an. Last ask him cold feel
          met spot shy want. Children me laughing we prospect answered followed. At it went
          is song that held help face.`;

    return (
        <>
            <Header imgUrl='https://imgur.com/lOfO0a9.png' title='Our Coffee'/>
            <About title='About our beans' descr1={descr1} descr2={descr2} imgUrl={'https://imgur.com/BydM0Ow.jpg'} />
            <img src='https://imgur.com/q4z35gL.png' alt='line' />
            <Filter />
            <Cards data={dataForCards} />
        </>
        );
}

export default OurCoffee;