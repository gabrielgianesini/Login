import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return(
    <div>
      <h2>Home</h2>
      <button onClick={()=> navigate('/dashbord')}>dashbord</button>
      <button onClick={()=> navigate('/preferences')}>dashbord</button>
    </div>
  );
}