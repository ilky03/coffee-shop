import './Cards.css';


const Cards = ({data}) => {

    const cards = data.map(card => {
        return (
            <div className='card' key={Math.trunc(Math.random()*1000)}>
                <img src={card.imgUrl} alt="coffee" />
                <h6>{card.title}</h6>
                <p>{card.price}</p>
            </div>
        )
    })

    return (
        <div className='cards'>{cards}</div>
    )
}

export default Cards;