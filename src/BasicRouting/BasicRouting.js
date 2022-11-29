import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ErrorPage from '../Pages/ErrorPage';
import Header from '../Components/Header';
import Home from '../Pages/Home';
import Footer from '../Components/Footer';
import Currency from '../Pages/Currency';
import SignUp from '../Pages/SignUp';


const basicRouting = ({counter,setCounter}) => {
  return (
    <Router>
      <Header counter={counter} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Currency' element={<Currency />} />
        <Route path='SignUp' element={<SignUp />} />
        {/* w/o params */}
        {/* <Route path='profile' element={<Profile />} /> */}
        {/* with params */}
        {/* <Route path='profile/:username' element={<Profile />} />
        <Route path='about' element={<About />} />*/}
        
        <Route path='*' element={<ErrorPage />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default basicRouting;
