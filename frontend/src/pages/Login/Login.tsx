import React, { useRef } from 'react';

import './Login.css'

export default function Login() {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordsRef = useRef<HTMLInputElement>(null)
  const handleSubmit = async () =>{
    return true
  }

  return(
    
    <div className='login-wrapper'>
     <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Usuário</p>
          <input type="text" ref={usernameRef} placeholder="usuario"/>
        </label>
        <label>
          <p>Senha</p>
          <input  type="password" ref={passwordsRef} placeholder="senha"/>
        </label>
        <div className='login-button'> 
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
    
  )
}

