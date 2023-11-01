
import React from 'react';

const Login = (props) => {
  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Email" value={props.email} />
      <input type="password" placeholder="Password" value={props.password} />
      <button>Log In</button>
    </div>
  );
};

export default Login;
