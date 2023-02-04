import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.scss';
const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                        <Link to='/'>Projects</Link>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
