import React, { useEffect } from 'react';
import './styles/ProjectOverview.scss';
const Rameshgar = () => {
    useEffect(() => {
        document.title = 'Portfolio - Rameshgar';
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='ProjectOverview'>
            <h1>Rameshgar - Online Music Learning Platform</h1>
            <p>
                <span className='bold'>Tech Stack</span>: React, React Router,
                abcjs, Redux Toolkit, RTK Query, Workbox, Sass, HTML5, Express,
                REST API, Sequelize, MySQL
                <br />
                <span className='bold'>Live Preview</span> :{' '}
                <a href=' https://rameshgar.com'> rameshgar.com</a>
            </p>
            <p>
                Experience Rameshgar in action! Check out the demo video to see
                this project in action for yourself.
            </p>
            <div className='video'>
                <iframe
                    width='560'
                    height='315'
                    src='https://www.youtube.com/embed/JWbBSK1mhgY'
                    title='YouTube video player'
                    frameborder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowfullscreen
                ></iframe>
            </div>
            <p>
                Rameshgar is an online music learning platform that I created.
                It is the biggest project I have ever done alone and has gone
                through three major versions. The latest version is called
                MeloLearn, built using React. Rameshgar offers features such as
                interactive animations on musical instruments and music sheets,
                sight-reading web apps, and ear training web apps, with a focus
                on Persian musical instruments. It also has a blog and allows
                users to write comments for music pieces and blog posts. Access
                to some pieces is limited, and users need to buy a subscription
                plan for full access. Rameshgar has a heavy backend part, and
                the admin has various privileges. It has taught me a lot and has
                been a tremendous learning experience.
            </p>
        </div>
    );
};

export default Rameshgar;
