import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuBar } from '../../components/MenuBar/MenuBar';

export default function Home() {
  const navigate = useNavigate();
  return(
    <div>
       <MenuBar/>
      <h2>Home</h2>
      <button onClick={()=> navigate('/dashbord')}>dashbord</button>
      <button onClick={()=> navigate('/home/about')}>about</button>
    </div>
  );
}