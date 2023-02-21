import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
const Home = lazy(() => import('./components/Home'));
const Contact = lazy(() => import('./components/Contact'));
const About = lazy(() => import('./components/About'));

const Melodia = lazy(() => import('./components/Melodia'));
const MeloLearn = lazy(() => import('./components/MeloLearn'));
const MusicEditor = lazy(() => import('./components/MusicEditor'));
const Space = lazy(() => import('./components/Space'));
const Comments = lazy(() => import('./components/Comments'));
const Rameshgar = lazy(() => import('./components/Rameshgar'));

function App() {
    return (
        <div className='App'>
            <Header />
            <Suspense>
                <Routes>
                    <Route path='/' element={<Home />} />

                    <Route path='/contact' element={<Contact />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/melodia' element={<Melodia />} />
                    <Route path='/melolearn' element={<MeloLearn />} />
                    <Route path='/musiceditor' element={<MusicEditor />} />
                    <Route path='/space' element={<Space />} />
                    <Route path='/comments' element={<Comments />} />
                    <Route path='/rameshgar' element={<Rameshgar />} />
                </Routes>
            </Suspense>
            <Footer />
        </div>
    );
}

export default App;
