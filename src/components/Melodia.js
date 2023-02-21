import React, { useEffect } from 'react';
import './styles/ProjectOverview.scss';
const Melodia = () => {
    useEffect(() => {
        document.title = 'Portfolio - Melodia';
    }, []);
    return (
        <div className='ProjectOverview'>
            <h1>Melodia</h1>
            <p>
                <span className='bold'>Tech Stack</span>: html5, css3, jQuery,
                canvas, web audio api, express.js
                <br />
                <span className='bold'>Live Preview</span> :{' '}
                <a href='https://melodia.shadmehri.xyz'>
                    melodia.shadmehri.xyz
                </a>
            </p>
            <p>
                Melodia is a project that I created in 2015 to help music
                students learn more easily. I made four different web apps for
                this purpose:
                <ul>
                    <li>
                        Sight-reading apps that prompts users to identify notes
                        or locate them on an instrument.
                    </li>
                    <li>
                        Ear-training apps that allows users to listen to notes,
                        intervals, and chords and identify them.
                    </li>
                    <li>
                        A web app that plays music pieces with interactive
                        animation on a musical instrument, with the ability to
                        adjust the tempo.
                    </li>
                    <li>
                        Some web apps that makes it possible for users to play
                        an instrument online and record what they have played.
                    </li>
                </ul>
            </p>
            <p>
                Initially, these apps were created mainly for Persian musical
                instruments, but now you can access some of them on the
                following link:{' '}
                <a href='https://melodia.shadmehri.xyz'>
                    https://melodia.shadmehri.xyz
                </a>
                <br />
                For the version that is online now, I used a simple Express app
                to handle the different routes.
            </p>
            <p>
                This project presented a lot of challenges, especially in terms
                of playing music pieces or recording and playing back what the
                user has played on the instrument. To achieve this, I used the
                following approach:
                <ul>
                    <li>I loaded all the sounds of the musical instrument.</li>
                    <li>I saved all the music melody notes in one array.</li>
                    <li>
                        I saved the rhythm of all music notes in another array.
                    </li>
                    <li>
                        With the above arrays, I played each note at a specific
                        time.
                    </li>
                    <li>
                        I made another web app to calculate when each note
                        should be played by considering its rhythm. This app
                        created those arrays I mentioned.
                    </li>
                </ul>
            </p>
            <p>
                This approach may seem easy, but it becomes much more
                complicated than you imagine when you want to add grace notes,
                triplets or slurs, and you can see many math calculations are
                required.
            </p>
            <p>
                The challenges of this project were not limited to calculations
                and how to use Web Audio API to play harmonic notes or single
                notes or how to draw and play more than 40 different type of
                chords, etc. Displaying instruments, music staff, and notes and
                making them responsive was not easy too.
                <br />
                To display all music notes, flat and sharp signs, I used canvas
                and wrote many functions to draw what you see. Additionally, for
                displaying instruments like the piano and showing green and red
                circles on the piano keys, as you can see in the{' '}
                <a href='https://melodia.shadmehri.xyz/notes-ear-training'>
                    music dictation app
                </a>
                , I used some creative ways to use CSS.
            </p>
        </div>
    );
};

export default Melodia;
