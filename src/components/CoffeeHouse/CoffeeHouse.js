import Header from '../Header/Header';
import About from '../About/About';
import Cards from '../Cards/Cards';

import './CoffeeHouse.css'

const dataForCards = [
    {id: 0, title: 'Solimo Coffee Beans 2kg', price: '10.73$', imgUrl: 'https://imgur.com/kz8BmO1.png'},
    {id: 1, title: 'Presto Coffee Beans 1kg', price: '15.99$', imgUrl: 'https://imgur.com/LZjF5Su.png'},
    {id: 2, title: 'AROMISTICO Coffee 1kg', price: '6.99$', imgUrl: 'https://imgur.com/7CtoR8V.png'},
]

const CoffeeHouse = () => {

    const descr1 = 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.',
          descr2 = 'Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.',
          title = 'Everything You Love About Coffee';
    return (
        <>
            <Header imgUrl={'https://imgur.com/xe422uX.jpg'} title={title} page='house'/>
            <main>
                <About title='About Us' descr1={descr1} descr2={descr2}/>
                <section className='best-coffee'>
                    <h2>Our best</h2>
                    <Cards data={dataForCards} />
                </section>
            </main>
            
        </>
    );
}

export default CoffeeHouse;