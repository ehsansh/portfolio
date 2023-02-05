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
            <section className='projects'>
                <h1>Projects</h1>
                <p>Some of the things I've built so far.</p>
                <div className='projects-wrapper'>
                    <div className='project'>
                        <Link to='/'>
                            <img
                                src={require('./images/rectangle.png')}
                                alt=''
                            />
                            <h3>Music Project</h3>
                        </Link>
                    </div>
                    <div className='project'>
                        <Link to='/'>
                            <img
                                src={require('./images/rectangle.png')}
                                alt=''
                            />
                            <h3>Music Project</h3>
                        </Link>
                    </div>
                    <div className='project'>
                        <Link to='/'>
                            <img
                                src={require('./images/rectangle.png')}
                                alt=''
                            />
                            <h3>Music Project</h3>
                        </Link>
                    </div>
                </div>
            </section>
            <section className='tech-stack'>
                <h2>My Tech Stack</h2>
                <p>Technologies I've been working recently.</p>
                <div className='tech-stack-wrapper'>
                    <div className='tech'>
                        <img src={require('./icons/html5.svg').default} />
                    </div>
                    <div className='tech'>
                        <img src={require('./icons/css3.svg').default} />
                    </div>
                    <div className='tech'>
                        <img src={require('./icons/sass.svg').default} />
                    </div>
                    <div className='tech'>
                        <img src={require('./icons/javascript.svg').default} />
                    </div>
                    <div className='tech'>
                        <img src={require('./icons/react.svg').default} />
                    </div>
                    <div className='tech'>
                        <img src={require('./icons/redux.svg').default} />
                    </div>
                    <div className='tech'>
                        <img src={require('./icons/vuejs.svg').default} />
                    </div>

                    <div className='tech'>
                        <img src={require('./icons/nodejs.svg').default} />
                    </div>
                    <div className='tech'>
                        <img src={require('./icons/express.svg').default} />
                    </div>
                    <div className='tech'>
                        <img src={require('./icons/mysql.svg').default} />
                    </div>
                    <div className='tech'>
                        <img src={require('./icons/sequelize.svg').default} />
                    </div>
                    <div className='tech'>
                        <img src={require('./icons/github.svg').default} />
                    </div>
                    <div className='tech'>
                        <img src={require('./icons/git.svg').default} />
                    </div>

                    <div className='tech'>
                        <img src={require('./icons/vs-code.svg').default} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
