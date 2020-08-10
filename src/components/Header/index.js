import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const Header = ({ handleClick, handleKeyDown }) => {

  return (
    <header className="top-nav flex flex--justify-between">
      <div className="logo-container">
        <Link to='/'>
          <img className="logo" src="img/logo.svg" alt="Jam Cafe logo" />
        </Link>
      </div>
      <div className="top-nav-right flex flex--justify-around">
        {/* TODO: Hide menu on click outside of menu */}
        <img
          tabIndex="0"
          src="img/icons/menu.svg"
          alt="Menu button"
          className="menu-btn filter-primary"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="mobile-menu">
        <ul className="mobile-menu--list">
          <li>
            <Link
              onClick={handleClick}
              to='/'
            >Home
              </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              to='/register'
            >Sign Up
              </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              to='/login'
            >Login
              </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              to='/about'
            >About
              </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  handleClick: PropTypes.func,
  handleKeyDown: PropTypes.func
}
