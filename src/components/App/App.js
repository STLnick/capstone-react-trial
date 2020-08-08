import React from 'react';

import { About } from './About'
import { Home } from './Home'
import { Login } from './Login'
import { Register } from './Register'

import './App.css';

export const App = () => {
  return (
    <div>
      <h1>APP</h1>
      <Home />
      <About />
      <Login />
      <Register />
    </div>
  );
}
