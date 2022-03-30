import React from 'react';
import { Navigate, Route, RouteProps } from "react-router-dom";
import Home from '../pages/Home/Home';


export const PrivateRoute = ({ ...rest }: RouteProps )  => {
  let auth = true //useAuth();
  
  return (
    <Route path="/home" element={<Home />} />
  );
}