import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import ProfileDetails from './components/ProfileDetails';
import BookingMeeting from './components/BookMeeting';
import Login from './components/Login';
import Signup from './components/Signup';
import AuthPage from './components/AuthPage';

const App = () => {
  return (
    
    <Router>
      <Routes>
      <Route path="/auth" element={<AuthPage />} />
        <Route path="/profile" component={ProfileDetails} />
        <Route path="/book-meeting" component={BookingMeeting} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/" component={Home} />
     </Routes>
    </Router>
  );
};

export default App;