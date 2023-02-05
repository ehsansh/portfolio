import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Footer.scss';
const Header = () => {
    return (
        <footer>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>
                            <img src={require('./icons/github.svg').default} />
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <img
                                src={require('./icons/linkedin.svg').default}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <img src={require('./icons/email.svg').default} />
                        </Link>
                    </li>
                </ul>
                <p>@2022 Ehsan Shadmehri All rights reserved.</p>
            </nav>
        </footer>
    );
};

export default Header;
