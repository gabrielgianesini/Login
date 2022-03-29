import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import './App.css';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Dashboard from '../Dashbord/Dashbord';
import Preferences from '../Preferences/Preferences';

import useToken from './useToken'


function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashbord" element={<Dashboard />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
