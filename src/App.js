import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'

import routes from './routes'

import './App.css';

export const App = () => {

  const toggleMobileMenu = () => {
    document.querySelector('.mobile-menu').classList.toggle('active-mobile-menu')
    document.querySelector('.overlay').classList.toggle('enabled')
  }

  const handleMenuBtnKeyDown = (e) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      e.preventDefault();
      toggleMobileMenu()
    }
  }

  return (
    <Router>
      <div className="overlay"></div>
      <header className="top-nav flex flex--justify-between">
        <div className="logo-container">
          <Link to='/'>
            <img className="logo" src={require("./img/logo.svg")} alt="Jam Cafe logo" />
          </Link>
        </div>
        <div className="top-nav-right flex flex--justify-around">
          {/* TODO: Hide menu on click outside of menu */}
          <img
            tabIndex="0"
            src={require("./img/icons/menu.svg")}
            alt="Menu button"
            className="menu-btn filter-primary"
            onClick={toggleMobileMenu}
            onKeyDown={handleMenuBtnKeyDown}
          />
        </div>
        <div className="mobile-menu">
          <ul className="mobile-menu--list">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/register'>Sign Up</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </div>
      </header>
      {routes.map(({ Component, path }, i) => (
        <Route
          key={i}
          exact
          path={path}
          component={Component}
        />
      ))}
    </Router>
  );
}
