import React, { useState } from 'react';
/* import PropTypes from 'prop-types';
 */
import './Login.css'
import { useNavigate } from 'react-router-dom';
 

export default function Login({setToken}: any ) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    /* const token = `${username+password}`  await loginUser({
      username,
      password
    }); 
    setToken(token);
    navigate('/home') */
  }

  localStorage.removeItem('token');


  return(
    <h1>Login</h1>
   
  )
}

 /* <div className="login-wrapper">
      <h1>Please Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div> */
/* Login.propTypes = {
  setToken: PropTypes.func.isRequired
} */