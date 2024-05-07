import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [scrollToId, setScrollToId] = useState(null);

    useEffect(() => {
        if (scrollToId) {
            const element = document.getElementById(scrollToId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
            setScrollToId(null);
        }
    }, [scrollToId]);

    const handleScrollTo = (id) => {
        setScrollToId(id);
    };

    return (
        <header>
            <nav>
                <ul>
                    <li><a className="nav-link" onClick={() => handleScrollTo('home')}>Home</a></li>
                    <li><a className="nav-link" onClick={() => handleScrollTo('about')}>About</a></li>
                    <li><a className="nav-link" onClick={() => handleScrollTo('works')}>Works</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
