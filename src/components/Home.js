import React from 'react';
import backgroundImage from 'C:/Users/feres/OneDrive/Desktop/JuniorProject/src/background.png';

const Home = (props) => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', // Set the height to at least the viewport height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black', // Text color on the background
    textAlign: 'center',
  };

  return (
    <div style={backgroundStyle}>
      <h2>Welcome To Healthy SMU</h2>
      <p>
        This is the home page of our website. You can add some introductory text and any other content you want to showcase here.
      </p>
    </div>
  );
};


export default Home;