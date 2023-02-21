import React, { useEffect } from 'react';
import './styles/ProjectOverview.scss';
const Space = () => {
    useEffect(() => {
        document.title = 'Portfolio - Space';
    }, []);

    return (
        <div className='ProjectOverview'>
            <h1>Space</h1>
            <p>
                <span className='bold'>Tech Stack</span>: React, React Router,
                HTML5, CSS3, Flexbox
                <br />
                <span className='bold'>Live Preview</span> :{' '}
                <a href='https://ehsansh.github.io/space-tourism'>
                    ehsansh.github.io/space-tourism/
                </a>
                <br />
                <span className='bold'>Code: </span>
                <a href='https://github.com/ehsansh/space-tourism'>
                    github.com/ehsansh/space-tourism
                </a>
            </p>
            <p>
                I was inspired by{' '}
                <a href='https://www.frontendmentor.io'>FrontendMentor</a> to
                create this set of landing pages. The project consists of four
                responsive pages. Although I have created similar websites in
                the past, they are unfortunately not available to preview
                online. Therefore, I completed this project in less than a week
                to showcase my skills.
            </p>
        </div>
    );
};

export default Space;
