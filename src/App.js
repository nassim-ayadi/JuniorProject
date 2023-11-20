import React from 'react';
import WelcomePage from './components/WelcomePage'
import LoginSignUp from './components/LoginSignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import ProfileDetails from './components/ProfileDetails';
import BookMeeting from './components/BookMeeting';
const App = () => {
  return (
      <div>
        <BrowserRouter>
        <Navigation/> 
          <Routes>
            <Route index element={<WelcomePage/>}/>
            <Route path='/' element={<WelcomePage/>}/>
            <Route path='/profile-details' element={<ProfileDetails/>}/>
            <Route path='/book-a-meeting' element={<BookMeeting/>}/>
            <Route path='/login' element={<LoginSignUp/>}/>
          </Routes>
        </BrowserRouter>
      
       
      </div>
  );
};

export default App;
