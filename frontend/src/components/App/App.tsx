import React, {  } from 'react';
import {  Route, Routes,  } from 'react-router-dom';

import Login from '../../pages/Login/Login';
import Home from '../../pages/Home/Home';
import Dashboard from '../../pages/Dashbord/Dashbord';


import useToken from '../../hooks/useToken'


function App() {
  const { token, setToken } = useToken();

  if(!token) {
   return <Login setToken={setToken}/>
  }

  
  return (
      <Routes>
        <Route path="/login" element={<Login setToken={setToken}/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/dashbord" element={<Dashboard />} />
        <Route path="*" element={<p>Error 404!</p>} />
      </Routes>
  );
}


export default App;
