import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import LoginSignUp from './components/LoginSignUp';

const App = () => {
  return (
      <div>
        <LoginSignUp/>
      </div>
  );
};

export default App;
