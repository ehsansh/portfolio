import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.scss';

const Home = () => {
    return (
        <div className='Home'>
            <section className='intro'>
                <p className='text'>
                    Multi-talented web developer
                    <br />
                    with a strong foundation in problem-solving
                    <br />
                    skills, fueled by a diverse range of interests,
                    <br />
                    including music, physics, and programming.
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
                            <img
                                src={require('./images/melodia.png')}
                                alt='Melodia'
                            />
                            <h3>Melodia</h3>
                            <ul class='tech-stack'>
                                <li>jQuery</li>
                                <li>canvas</li>
                                <li>html5</li>
                                <li>css3</li>
                            </ul>
                        </Link>
                    </div>
                    <div className='project'>
                        <Link to='/melolearn'>
                            <img
                                src={require('./images/melolearn.png')}
                                alt='Melolearn'
                            />
                            <h3>MeloLearn</h3>
                            <ul class='tech-stack'>
                                <li>React</li>
                                <li>Redux toolkit</li>
                                <li>Sass</li>
                                <li>React Router</li>
                            </ul>
                        </Link>
                    </div>
                    <div className='project'>
                        <Link to='/musiceditor'>
                            <img
                                src={require('./images/musiceditor.png')}
                                alt='Music Editor'
                            />
                            <h3>Music Editor</h3>
                            <ul class='tech-stack'>
                                <li>Vue2</li>
                                <li>Vuex3</li>
                                <li>Sass</li>
                                <li>SVG</li>
                            </ul>
                        </Link>
                    </div>
                    <div className='project'>
                        <Link to='/rameshgar'>
                            <img
                                src={require('./images/rameshgar.png')}
                                alt='Rameshgar'
                            />
                            <h3>Rameshgar</h3>
                            <ul class='tech-stack'>
                                <li>React</li>
                                <li>Redux Toolkit</li>
                                <li>Express</li>
                                <li>MySQL</li>
                            </ul>
                        </Link>
                    </div>
                    <div className='project'>
                        <Link to='/comments'>
                            <img
                                src={require('./images/comment.png')}
                                alt='Comments'
                            />
                            <h3>Comments</h3>
                            <ul class='tech-stack'>
                                <li>React</li>
                                <li>REST API</li>
                                <li>Express</li>
                                <li>Docker</li>
                            </ul>
                        </Link>
                    </div>
                    <div className='project'>
                        <Link to='/space'>
                            <img
                                src={require('./images/space.png')}
                                alt='Space'
                            />
                            <h3>Space</h3>
                            <ul class='tech-stack'>
                                <li>React</li>
                                <li>React Router</li>
                                <li>CSS3</li>
                                <li>Flexbox</li>
                            </ul>
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
                            alt='HTML5'
                            src={require('./icons/html5.svg').default}
                        />
                        <span>HTML5</span>
                    </div>
                    <div className='tech'>
                        <img
                            alt='CSS3'
                            src={require('./icons/css3.svg').default}
                        />
                        <span>CSS3</span>
                    </div>
                    <div className='tech'>
                        <img
                            alt='Sass'
                            src={require('./icons/sass.svg').default}
                        />
                        <span>Sass</span>
                    </div>
                    <div className='tech'>
                        <img
                            alt='JavaScript'
                            src={require('./icons/javascript.svg').default}
                        />
                        <span>JavaScript</span>
                    </div>
                    <div className='tech'>
                        <img
                            alt='React'
                            src={require('./icons/react.svg').default}
                        />
                        <span>React</span>
                    </div>
                    <div className='tech'>
                        <img
                            alt='Redux'
                            src={require('./icons/redux.svg').default}
                        />
                        <span>Redux</span>
                    </div>
                    <div className='tech'>
                        <img
                            alt='Vue.js'
                            src={require('./icons/vuejs.svg').default}
                        />
                        <span>Vue.js</span>
                    </div>
                    <div className='tech'>
                        <img
                            alt='Figma'
                            src={require('./icons/figma.svg').default}
                        />
                        <span>Figma</span>
                    </div>
                    <div className='tech'>
                        <img
                            alt='Node.js'
                            src={require('./icons/nodejs.svg').default}
                        />
                        <span>Node.js</span>
                    </div>
                    <div className='tech'>
                        <img
                            alt='Express'
                            src={require('./icons/express.svg').default}
                        />
                        <span>Express</span>
                    </div>
                    <div className='tech'>
                        <img
                            alt='MySQL'
                            src={require('./icons/mysql.svg').default}
                        />
                        <span>MySQL</span>
                    </div>
                    <div className='tech'>
                        <img
                            alt='Sequelize'
                            src={require('./icons/sequelize.svg').default}
                        />
                        <span>Sequelize</span>
                    </div>
                    <div className='tech'>
                        <img
                            alt='GitHub'
                            src={require('./icons/github.svg').default}
                        />
                        <span>GitHub</span>
                    </div>
                    <div className='tech'>
                        <img
                            alt='Git'
                            src={require('./icons/git.svg').default}
                        />
                        <span>Git</span>
                    </div>
                    <div className='tech'>
                        <img
                            alt='VS Code'
                            src={require('./icons/vs-code.svg').default}
                        />
                        <span>VS Code</span>
                    </div>
                    <div className='tech'>
                        <img
                            alt='Docker'
                            src={require('./icons/docker.svg').default}
                        />
                        <span>Docker</span>
                    </div>
                    <div className='tech'>
                        <img
                            alt='Jest'
                            src={require('./icons/jest.svg').default}
                        />
                        <span>Jest</span>
                    </div>
                    <div className='tech'>
                        <img
                            alt='REST API'
                            src={require('./icons/rest-api.png')}
                        />
                        <span>REST API</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
