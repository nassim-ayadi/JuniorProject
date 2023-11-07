
import React from 'react';

const Signup = (props) => {
  return (
    <div>
      <h1>AA</h1>
      <h2>Sign Up</h2>
      <input type="text" placeholder="Email" value={props.email} />
      <input type="password" placeholder="Password" value={props.password} />
      <button>Sign Up</button>
    </div>
  );
};

export default Signup;
