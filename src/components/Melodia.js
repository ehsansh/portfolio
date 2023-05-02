import React, { useEffect } from 'react';
import './styles/ProjectOverview.scss';
const Melodia = () => {
    useEffect(() => {
        document.title = 'Portfolio - Melodia';
        window.scrollTo(0, 0);
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
                Melodia is a project I created to help music students learn more
                easily. It includes four web apps:
                <ul>
                    <li>
                        Sight-reading and ear-training apps to help users
                        identify notes and chords.
                    </li>
                    <li>
                        An app that plays music pieces on a musical instrument
                        with adjustable tempo.
                    </li>
                    <li>
                        Web apps that allow users to play an instrument online
                        and record what they played.
                    </li>
                </ul>
            </p>
            <p>
                Initially, the apps were created for Persian instruments but now
                some are accessible at{' '}
                <a href='https://melodia.shadmehri.xyz'>
                    melodia.shadmehri.xyz
                </a>
                . I used a simple Express app to handle the different routes.
                The project had challenges like playing and recording music
                pieces. To solve them, I loaded sounds of the instrument, saved
                the melody and rhythm of each note, and played each note at a
                specific time. I used another app to calculate when each note
                should be played by considering its rhythm. It was complicated
                to add grace notes, triplets or slurs. To display music notes
                and instruments, I used canvas and CSS creatively.
            </p>
        </div>
    );
};

export default Melodia;
