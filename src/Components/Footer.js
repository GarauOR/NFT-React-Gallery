import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Footer(props) {
    return (
    <div>
        <section id="summary">
            <h2>Featured Artists</h2>
            <p>|</p>
            <h2>The Future of Art</h2>
            <p>|</p>
            <h2>Future Projects</h2>
            <p>|</p>
            <h2>About Us</h2>
        </section>
        <footer>
            <Link to='https://github.com/GarauOR/NFT-React-Gallery' className='logo'><img src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol-700x394.png" alt="github logo" id="ghub"></img></Link>
            <p>© Luca Garau 2022</p>
        </footer>
    </div>
    );
}

export default Footer;