import React, { useEffect } from 'react';
import './styles/ProjectOverview.scss';
const MeloLearn = () => {
    useEffect(() => {
        document.title = 'Portfolio - MeloLearn';
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='ProjectOverview'>
            <h1>MeloLearn</h1>
            <p>
                <span className='bold'>Tech Stack</span>: React, Redux toolkit,
                React Router, Sass, abcjs
                <br />
                <span className='bold'>Live Preview</span> :{' '}
                <a href='https://melolearn.shadmehri.xyz'>
                    melolearn.shadmehri.xyz
                </a>
            </p>
            <p>
                Check out MeloLearn in action! Watch the video for a
                demonstration of what I've accomplished. Thanks for taking the
                time to view it!
            </p>
            <div className='video'>
                <iframe
                    width='560'
                    height='315'
                    src='https://www.youtube.com/embed/fTAQ5E7XeQE'
                    title='YouTube video player'
                    frameborder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowfullscreen
                ></iframe>
            </div>
            <p>
                MeloLearn is the latest version of{' '}
                <a href='/melodia'>Melodia</a> , designed for the same target
                audience with improved features and a different tech stack.
                Using <a href='https://github.com/paulrosen/abcjs'>abcjs</a>{' '}
                allowed me to focus on developing the{' '}
                <a href='https://melolearn.shadmehri.xyz/my-pieces'>
                    music editor
                </a>
                , the most complex part of MeloLearn, despite its pros and cons.
                Developing the editor required thousands of lines of code over
                several months.
            </p>
            <p>
                For instance, in music, the flags of music notes of one beat are
                connected. With{' '}
                <a href='https://github.com/paulrosen/abcjs'>abcjs</a>, a string
                like 'g f' generates g and f on the staff. When there's a space
                between g and f, the flags of these two notes are not connected.
                However, I had to calculate the notes of one beat myself, which
                became even more challenging because we have grace notes,
                triplets, notes with dots, notes with duration of more than one
                beat, among other complications.
            </p>
            <p>
                Consider another example: when you write a note, you can change
                its rhythm. There are two scenarios in this case. If the new
                rhythm is larger than the current rhythm, some of the next notes
                are deleted, and some remain unchanged. If the new rhythm is
                less than the current rhythm, we must create some rests so that
                their duration equals the difference between the current and new
                rhythm of the note. As you can see, a simple feature like this
                required numerous calculations.
            </p>
            <p>
                I encountered hundreds of problems during the development of
                MeloLearn. Since few music editors are available online, and
                most of them are commercial projects, there were few answers
                online. I had to find solutions to these problems myself.
            </p>
            <p>
                MeloLearn's{' '}
                <a href='https://melolearn.shadmehri.xyz/my-pieces'>
                    music editor
                </a>{' '}
                is functional, and you can write music for the piano and play
                it, observing the animation on the piano. Although I built it
                for other musical instruments, you can only use the piano as a
                sample at this time. Additionally, the{' '}
                <a href='https://melolearn.shadmehri.xyz/music-dictation'>
                    {' '}
                    advanced music dictation app
                </a>{' '}
                , a combination of three ear training web apps from the{' '}
                <a href='/melodia'>Melodia</a> project, is built with React.
            </p>
            <p>
                Don't forget to check out the{' '}
                <a href='https://melolearn.shadmehri.xyz/piano-sight-reading'>
                    piano sight-reading
                </a>{' '}
                and{' '}
                <a href='https://melolearn.shadmehri.xyz/sight-reading'>
                    {' '}
                    sight-reading
                </a>{' '}
                apps, which are also helpful and pleasant to use.
            </p>
        </div>
    );
};

export default MeloLearn;
