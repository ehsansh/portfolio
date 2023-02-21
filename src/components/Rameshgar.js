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
                Sequelize, MySQL
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
                Rameshgar is the biggest project I have ever done solo, and it
                is an online music learning platform available in Persian. The
                platform has gone through three major versions, with{' '}
                <a href='/melodia'>Melodia</a> being the initial version,
                followed by the Vue version, which currently you can see its{' '}
                <a href='/musiceditor'>music editor</a> , and the latest
                version, <a href='/melolearn'>MeloLearn</a>, built using React.
                <a href='/melolearn'>MeloLearn</a> is also a sample of some of
                the web apps that can be found on Rameshgar.
            </p>
            <p>
                Rameshgar is a full-stack startup that has evolved into a
                business generating passive income. Therefore, I am unable to
                share my music project codes.
            </p>
            <p>
                Rameshgar offers various features, including the ability to see
                and play music pieces for five different instruments online.
                These instruments include Santoor, bells, Tar, Setar, and Piano,
                and each instrument has hundreds of music pieces available. The
                platform offers interactive animation on musical instruments and
                music sheets, allowing users to change the tempo and play music
                from any note they prefer. Users can also download a PDF of the
                music sheet, and the platform is fully responsive. Additionally,
                Rameshgar offers sight-reading web apps and ear training web
                apps, with some focusing on Persian musical instruments.
            </p>
            <p>
                Rameshgar also features a blog with different categories to
                categorize posts. Users can write comments for music pieces and
                blog posts. However, access to some pieces is limited, and users
                need to buy a subscription plan to gain full access.
            </p>
            <p>
                Rameshgar has a heavy backend part, and the admin has various
                privileges, including the ability to see the list of users and
                purchases, edit user profiles, change purchase plan details,
                give or cancel user access to different music pieces, write
                music pieces, and add or remove them from the site. The admin
                can also confirm, edit, or delete user comments and add, remove,
                or edit blog posts or categories.
            </p>
            <p>
                Apart from the technical stuff, Rameshgar has taught me a lot,
                including how to work with graphic designers, marketing persons
                or companies, and different people to accomplish tasks. I have
                also been invited to different tech startups, such as the Tehran
                International Computer Exhibition, where I had to pitch the
                platform.
                {/* <img src={require('./images/pitch-tehran.png')} alt='' /> */}
                <br />
                In 2019, I was invited to the{' '}
                <a href='https://www.seasidestartupsummit.com/'>
                    Sevan Startup Summit
                </a>{' '}
                , where I pitched in English in front of many mentors over ten
                times, receiving constructive feedback that helped me improve
                the platform.
                <img src={require('./images/sevan-certificate.png')} alt='' />
            </p>
            <p>
                Overall, Rameshgar has been a tremendous learning experience for
                me, and I have met many nice people and learned from them. For
                example, during the Sevan Startup Summit, we lived in a jungle
                in a tent near the Sevan lake, which was both challenging and
                fun.
            </p>
        </div>
    );
};

export default Rameshgar;
