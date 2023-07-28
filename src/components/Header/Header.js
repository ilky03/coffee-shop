import { Link } from 'react-router-dom';

import './Header.css';

const Header = ({imgUrl, title, page}) => {

    const isHouse = page === 'house';
    const backgroundStyles = {
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        height: `${isHouse ? '640px' : '260px'}`,
    }

    const houseElement = (
        <div>
            <h1>{title}</h1>
            <img src='https://imgur.com/tOhNsBM.png' alt='Beans logo' />
            <h3>We makes every day full of energy and taste</h3>
            <h3>Want to try our beans?</h3>
            <Link to="/our-coffee" className='btn'>More</Link>
        </div>
    )

    return (
        <header className='header' style={backgroundStyles}>
            {isHouse ? houseElement : <h1>{title}</h1>}
        </header>
    )
}

export default Header;