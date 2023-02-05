import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
const Home = lazy(() => import('./components/Home'));

function App() {
    return (
        <div className='App'>
            <Header />
            <Suspense>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </Suspense>
            <Footer />
        </div>
    );
}

export default App;
