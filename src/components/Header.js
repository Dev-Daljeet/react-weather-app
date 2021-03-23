import React from 'react';
import '../css/App.css';

const Header = (props) => {
    return (
        <header className="header-style">
        <h1>{props.title}</h1>
        </header>
    );
};

export default Header;
