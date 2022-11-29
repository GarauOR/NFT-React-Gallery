import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import Chart from '../Pages/Chart';
import Currency from '../Pages/Currency';
import News from '../Pages/News';
import SignUp from '../Pages/SignUp';
import '../App.css';
import basket from '../Img/basket.png';
import burgerMenu from '../Img/burgermenu.png';


function Header({counter}) {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <header>
                <Link to='/' className='logo'>Cryptix</Link>
                <span className="space"></span>
                <picture>
                <Link to='Chart'><img id="basket" src={basket} alt="Shopping Basket" /><div id="counter">{ counter }</div></Link>
                </picture>
                <img id="burgerMenu" src={burgerMenu} alt="Burgermenu" onClick={toggleVisibility} />
                <div id="headCont">
                    <Link to='Currency'>Currency</Link>
                    <Link to='news'>News</Link>
                    <Link to='SignUp'>Sign-up</Link>
        </div>
            </header>

            <section className={visible ? "menu toggleMenu" : "menu"}>
                <Link to='Currency'>Currency</Link>
                <Link to='news'>News</Link>
                <Link to='SignUp'>Sign-up</Link>
            </section>
        </div>
    );
}

export default Header;