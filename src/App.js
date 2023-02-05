import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
const Home = lazy(() => import('./components/Home'));
const Contact = lazy(() => import('./components/Contact'));
const About = lazy(() => import('./components/About'));

function App() {
    return (
        <div className='App'>
            <Header />
            <Suspense>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </Suspense>
            <Footer />
        </div>
    );
}

export default App;
