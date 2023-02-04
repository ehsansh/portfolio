import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.scss';

const Home = () => {
    return (
        <div className='Home'>
            <section className='intro'>
                <p className='text'>
                    Hi, <br />
                    My name is
                    <br />
                    Ehsan Shadmehri
                    <br />
                    I am a front-end developer
                    <br />
                    with some experiences
                    <br />
                    in back-end.
                </p>
                <div className='img'>
                    <img src={require('./images/ehsan.png')} />
                </div>
            </section>
            {/* <section className='projects'>
                <h1>Projects</h1>
                <div className='projects-wrapper'>
                    <div className='project'>
                        <img src={require('./images/rectangle.png')} alt='' />
                        <h3>
                            <Link>Music Project</Link>
                        </h3>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default Home;
