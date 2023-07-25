import { Link } from 'react-router-dom';

import './Nav.css';

const Nav = ({position}) => {

    const activeClass = position === 'footer' ? 'bottom' : 'top';

    return (
        <nav className={activeClass}>
            <ul>
                <li>
                    <Link to="/"><img src="https://imgur.com/vFAF80T.png" alt='beans' />Coffee house</Link>
                </li>
                <li>
                    <Link to="/our-coffee">Our coffee</Link>
                </li>
                <li>
                    <Link to="/pleasure">For your pleasure</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;