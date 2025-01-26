import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    return (
        <nav className="menu">
            <div className="menu-logo">
                <Link to="/">Vocabulary app</Link>
            </div>
            <ul className="menu-links">
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/cards">Карточки</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
