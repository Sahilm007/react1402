import "./Menu.css";
import React from "react";
import Home from '../Home/index';
import About from '../About/index';
import Contact from '../Contact/index';
import MyList from '../MyList/index';
import MyReuse from '../MyReuse/index'
import MyExceptions from '../MyExceptions/index'
import Ajax from '../Ajax/index'
import {HashRouter,Routes,Route,Navigate} from 'react-router-dom'
function template() {
  return (
    <div>
        <div className="menu-items">
            <a href="#/home">Home</a>
            <a href="#/about">About</a>
            <a href="#/contact">Contact</a>
            <a href="#/list">Lists</a>
            <a href="#/reuse">Reusable Components</a>
            <a href="#/exceptions">Exception Handling</a>
            <a href="#/ajax">AJAX</a>
        </div>
        <HashRouter>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/list' element={<MyList />} />
                <Route path='/reuse' element={<MyReuse />} />
                <Route path='/exceptions' element={<MyExceptions />} />
                <Route path='/ajax' element={<Ajax />} />
                <Route path='*' element={<Navigate to='/home' />} />
            </Routes>
        </HashRouter>
    </div>
  );
};

export default template;
