// AuthPage.js
import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';

class AuthPage extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: true, // Set the initial state to show the login form
    };
  }

  toggleForm = () => {
    this.setState((prevState) => ({
      isLogin: !prevState.isLogin,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleForm}>
          {this.state.isLogin ? 'Sign Up' : 'Login'}
        </button>
        {this.state.isLogin ? <Login /> : <Signup />}
      </div>
    );
  }
}

export default AuthPage;
