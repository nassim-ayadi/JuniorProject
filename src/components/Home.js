import React from 'react';
import BookingMeeting from './BookMeeting';
import ProfileDetails from './ProfileDetails';

const Home = (props) => {
  return (
    <div>
      <h1>Welcome to Your Home Page</h1>
      <ProfileDetails user={props.user} />
      <BookingMeeting />
    </div>
  );
};

export default Home;
