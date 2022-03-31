import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom"
import Dashboard from "../pages/Dashbord/Dashbord"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import About from "../pages/About/About"
import { PrivateRoute } from "../private/route"


export const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/home/about" element={<About />} />
          <Route path="/dashbord" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<Navigate to="/login"/>} />
      </Routes>
    </Router>
  )
}