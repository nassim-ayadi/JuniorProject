import React from 'react';
import Home from './components/Home';
import LoginSignUp from './components/LoginSignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route index   element={<Home/>}/>
            <Route path='/login' element={<LoginSignUp/>}/>
          </Routes>
        </BrowserRouter>
      
      </div>
  );
};

export default App;
