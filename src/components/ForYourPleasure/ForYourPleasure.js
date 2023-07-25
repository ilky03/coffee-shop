import Header from '../Header/Header';
import Cards from '../Cards/Cards';
import About from '../About/About';

const ForYourPleasure = () => {
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
            <Header imgUrl='https://imgur.com/lOfO0a9.png' title='For Your Pleasure'/>
            <About title='About our goods' descr1={descr1} descr2={descr2} imgUrl={'https://imgur.com/GH9zFJ3.png'} />
            <img src='https://imgur.com/q4z35gL.png' alt='line' style={{marginBottom: '30px'}}/>
            <Cards data={dataForCards} />
        </>
        );
}

export default ForYourPleasure;