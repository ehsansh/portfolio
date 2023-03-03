import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Footer.scss';
const Header = () => {
    return (
        <footer>
            <nav>
                <ul>
                    <li>
                        <a href='https://github.com/ehsansh/'>
                            <img src={require('./icons/github.svg').default} />
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/ehsan-shadmehri/'>
                            <img
                                src={require('./icons/linkedin.svg').default}
                            />
                        </a>
                    </li>
                    <li>
                        <a href='mailto:ehsanshadmehri@gmail.com'>
                            <img src={require('./icons/email.svg').default} />
                        </a>
                    </li>
                </ul>
                <p>&copy;2022 Ehsan Shadmehri All rights reserved.</p>
            </nav>
        </footer>
    );
};

export default Header;
