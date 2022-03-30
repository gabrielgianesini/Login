import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Dashboard from "../pages/Dashbord/Dashbord"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import Preferences from "../pages/Preferences/Preferences"
import { PrivateRoute } from "../private/route"



export const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />

        <PrivateRoute path="/home" element={<Home />} />
        <PrivateRoute path="/dashbord" element={<Dashboard />} />
        <PrivateRoute path="/preferences" element={<Preferences />} />

        <Route path="*" element={<p>Error 404!</p>} />
      </Routes>
    </Router>
  )
}