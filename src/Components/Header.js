import { Link } from 'react-router-dom';

const Header = props => {
    return (
        <header>
            <nav>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/give'>Give</Link>
            </nav>
        </header>
    )
}

export default Header;