import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuBar } from '../../components/MenuBar/MenuBar';




export default function Dashboard() {
  const navigate = useNavigate()

  const home = () =>{
    navigate("/home")
  }

  return(
    <div>
      <MenuBar/>
      <button onClick={()=>home()}>Home</button>
      <h2>Dashboard</h2>

    </div>
  );
}