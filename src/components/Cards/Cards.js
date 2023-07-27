import './Cards.css';


const Cards = ({data}) => {

    const cards = data.map(card => {
        return (
            <div className='card' key={card.id}>
                <img src={card.imgUrl} alt="coffee" />
                <h6>{card.title}</h6>
                {card.descr ? <p>{card.descr}</p> : null}
                <p>{card.price}</p>
            </div>
        )
    })

    return (
        <div className='cards'>{cards}</div>
    )
}

export default Cards;