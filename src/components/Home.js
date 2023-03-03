import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.scss';

const Home = () => {
    return (
        <div className='Home'>
            <section className='intro'>
                <p className='text'>
                    Hi, <br />
                    My name is Ehsan Shadmehri.
                    <br />
                    I am a front-end developer, with
                    <br />
                    some back-end knowledge.
                    <br />
                </p>
                <div className='img'>
                    <img
                        alt='ehsan shadmehri'
                        src={require('./images/ehsan.jpeg')}
                    />
                </div>
            </section>
            <section id='projects' className='my-projects'>
                <h1>Projects</h1>
                <p>Some of the things I've built so far.</p>
                <div className='projects-wrapper'>
                    <div className='project'>
                        <Link to='/melodia'>
                            <img src={require('./images/melodia.png')} alt='' />
                            <h3>Melodia</h3>
                        </Link>
                    </div>
                    <div className='project'>
                        <Link to='/melolearn'>
                            <img
                                src={require('./images/melolearn.png')}
                                alt=''
                            />
                            <h3>MeloLearn</h3>
                        </Link>
                    </div>
                    <div className='project'>
                        <Link to='/musiceditor'>
                            <img
                                src={require('./images/musiceditor.png')}
                                alt=''
                            />
                            <h3>Music Editor</h3>
                        </Link>
                    </div>
                    <div className='project'>
                        <Link to='/rameshgar'>
                            <img
                                src={require('./images/rameshgar.png')}
                                alt=''
                            />
                            <h3>Rameshgar</h3>
                        </Link>
                    </div>
                    <div className='project'>
                        <Link to='/comments'>
                            <img src={require('./images/comment.png')} alt='' />
                            <h3>Comments</h3>
                        </Link>
                    </div>
                    <div className='project'>
                        <Link to='/space'>
                            <img src={require('./images/space.png')} alt='' />
                            <h3>Space</h3>
                        </Link>
                    </div>
                </div>
            </section>
            <section className='tech-stack'>
                <h2>My Tech Stack</h2>
                <p>Technologies I've been working recently.</p>
                <div className='tech-stack-wrapper'>
                    <div className='tech'>
                        <img
                            alt='html5'
                            src={require('./icons/html5.svg').default}
                        />
                    </div>
                    <div className='tech'>
                        <img
                            alt='css3'
                            src={require('./icons/css3.svg').default}
                        />
                    </div>
                    <div className='tech'>
                        <img
                            al='sass'
                            src={require('./icons/sass.svg').default}
                        />
                    </div>
                    <div className='tech'>
                        <img
                            alt='javascript'
                            src={require('./icons/javascript.svg').default}
                        />
                    </div>
                    <div className='tech'>
                        <img
                            alt='react'
                            src={require('./icons/react.svg').default}
                        />
                    </div>
                    <div className='tech'>
                        <img
                            alt='redux'
                            src={require('./icons/redux.svg').default}
                        />
                    </div>
                    <div className='tech'>
                        <img src={require('./icons/vuejs.svg').default} />
                    </div>
                    <div className='tech'>
                        <img
                            alt='figma'
                            src={require('./icons/figma.svg').default}
                        />
                    </div>
                    <div className='tech'>
                        <img
                            alt='nodejs'
                            src={require('./icons/nodejs.svg').default}
                        />
                    </div>
                    <div className='tech'>
                        <img
                            alt='express-js'
                            src={require('./icons/express.svg').default}
                        />
                    </div>
                    <div className='tech'>
                        <img
                            alt='mysql'
                            src={require('./icons/mysql.svg').default}
                        />
                    </div>
                    <div className='tech'>
                        <img
                            alt='sequelize'
                            src={require('./icons/sequelize.svg').default}
                        />
                    </div>
                    <div className='tech'>
                        <img
                            alt='github'
                            src={require('./icons/github.svg').default}
                        />
                    </div>
                    <div className='tech'>
                        <img
                            alt='git'
                            src={require('./icons/git.svg').default}
                        />
                    </div>

                    <div className='tech'>
                        <img
                            alt='vs-code'
                            src={require('./icons/vs-code.svg').default}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
