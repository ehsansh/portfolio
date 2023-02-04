import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.scss';

import Header from './components/Header';
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
        </div>
    );
}

export default App;
