import "./Menu.css";
import React from "react";
import Home from '../Home/index';
import About from '../About/index';
import Contact from '../Contact/index';
import {HashRouter,Routes,Route,Navigate} from 'react-router-dom'
function template() {
  return (
    <div>
        <div className="menu-items">
            <a href="#/home">Home</a>
            <a href="#/about">About</a>
            <a href="#/contact">Contact</a>
        </div>
        <HashRouter>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<Navigate to='/home' />} />
            </Routes>
        </HashRouter>
    </div>
  );
};

export default template;
