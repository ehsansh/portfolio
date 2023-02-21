import React, { useEffect } from 'react';
import './styles/ProjectOverview.scss';
const Comments = () => {
    useEffect(() => {
        document.title = 'Portfolio - Comments';
    }, []);

    return (
        <div className='ProjectOverview'>
            <h1>Comments</h1>
            <p>
                <span className='bold'>Tech Stack</span>: React, Context Api,
                React Router, Sass, Express.js, Sass, mysql, sequelize
                <br />
                <span className='bold'>Live Preview</span> :{' '}
                <a href='https://comment.shadmehri.xyz'>
                    comment.shadmehri.xyz
                </a>
                <br />
                <span className='bold'>Front-end Code: </span>
                <a href='https://github.com/ehsansh/comment-frontend'>
                    github.com/ehsansh/comment-frontend
                </a>
                <br />
                <span className='bold'>Back-end Code: </span>
                <a href='https://github.com/ehsansh/comment-backend'>
                    github.com/ehsansh/comment-backend
                </a>
            </p>
            <p>
                I was inspired by one of{' '}
                <a href='https://www.frontendmentor.io'>FrontendMentor</a>'s
                website challenges to create this project. However, I added some
                features and turned it into a full-stack project.
            </p>
            <p>
                Upon opening the home page, you will be redirected to the{' '}
                <a href='https://comment.shadmehri.xyz/login'>login page</a>{' '}
                since it is a protected route and can only be accessed by
                logged-in users. If you haven't registered yet, you can access
                the{' '}
                <a href='https://comment.shadmehri.xyz/register'>
                    registration link
                </a>{' '}
                on the login page and sign up to see the home page. On the home
                page, you can write, edit, and delete comments, and also upvote
                or downvote them.
            </p>
            <p>
                To ensure authentication on the server-side, I created access
                and refresh tokens, and on the client-side, I used Context API
                to access the authentication data across different components.
                Additionally, I created custom hooks to better organize the
                code. You can find the back-end and front-end codes on my{' '}
                <a href='https://github.com/ehsansh/'>GitHub account</a> .
            </p>
        </div>
    );
};

export default Comments;
