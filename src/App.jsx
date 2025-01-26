import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import Cards from './pages/Cards';

const App = () => {
    return (
        <Router>
            <Menu />
            <div style={{ marginTop: '4rem' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cards" element={<Cards />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;

