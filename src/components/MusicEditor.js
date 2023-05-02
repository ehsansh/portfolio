import React, { useEffect } from 'react';
import './styles/ProjectOverview.scss';
const MusicEditor = () => {
    useEffect(() => {
        document.title = 'Portfolio - MusicEditor';
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='ProjectOverview'>
            <h1>MusicEditor</h1>
            <p>
                <span className='bold'>Tech Stack</span>: Vue2, Vuex3, CSS3,
                SVG, Sass
                <br />
                <span className='bold'>Live Preview</span> :{' '}
                <a href='https://musiceditor.shadmehri.xyz'>
                    musiceditor.shadmehri.xyz
                </a>
            </p>
            <p>
                See the Music Editor in action! Watch the demo video. Thank you
                for taking the time to watch.
            </p>
            <div className='video'>
                <iframe
                    width='560'
                    height='315'
                    src='https://www.youtube.com/embed/i2gCPHKGPUw'
                    title='YouTube video player'
                    frameborder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowfullscreen
                ></iframe>
            </div>
            <p>
                This is the Vue.js version of <a href='/melodia'>Melodia</a>,
                with a music editor as the most complicated part. I chose Vue
                because it helped me structure my work and avoid messy code like
                jQuery. Developing the music editor was challenging, especially
                rendering the music sheet, which I solved by splitting the
                project into many components and relying heavily on SVG. Each
                component is designed to do one thing, and the factory design
                pattern is used. This project was developed without{' '}
                <a href='https://github.com/paulrosen/abcjs'>abcjs</a>, and it
                supports some repeat signs that abcjs does not.
                <img
                    src={require('./images/musiceditor-screenshot.png')}
                    alt=''
                />
            </p>
            {/* <p>
                This project is the Vue version of{' '}
                <a href='/melodia'>Melodia</a> , which I developed using Vue.js
                for all the web apps. I created the project in 2019, and you can
                currently see its music editor, which is the most complicated
                part of the project.
            </p>
            <p>
                Why did I choose Vue for Melodia? The answer is simple. My code
                with jQuery became messy, like spaghetti, so I needed a more
                structured approach. Vue was simple, straightforward to use, and
                helped me organize my work.
            </p>
            <p>
                There were many challenges in developing the music editor, which
                I briefly mentioned in the{' '}
                <a href='/melolearn'>MeloLearn introduction</a> . Here, I want
                to focus on rendering the music sheet. Using Vue helped me split
                this massive project into many components, such as single notes,
                harmonic notes, rests, time signatures, key signatures, and
                more. To accomplish this, I heavily relied on SVG to render
                anything that you see.
            </p>
            <p>
                Using components makes it easy to show a change for example I
                could add accidental to a note just by adding v-if to the note
                component. But as always, it's not as easy as it seems. For
                example, we may draw a nice slur, but suddenly, the note with
                the slur is the last note in the music line. In this case, we
                must draw the slur differently, and our logic suddenly changes.
            </p>
            <p>
                Or suppose we have a simple structure to draw harmonic notes,
                and the x position of the harmonic notes is equal. But we need
                to have C and C sharp in this case, and the calculation of x for
                these two notes is not equal.
            </p>
            <p>
                These are just a few examples, and I tried to make each
                component do only one thing. If the type changes, the component
                should act differently. This is the factory design pattern,
                which I intuitively found to use without knowing the design
                pattern at that time.
            </p>
            <p>
                I developed this project before I found out about{' '}
                <a href='https://github.com/paulrosen/abcjs'>abcjs</a>. Although
                abcjs is excellent, it has some issues. For example, it does not
                support some repeat signs like measure repeat signs, which are
                used very commonly. My web app supports these kinds of repeat
                signs.
            </p> */}
        </div>
    );
};

export default MusicEditor;
