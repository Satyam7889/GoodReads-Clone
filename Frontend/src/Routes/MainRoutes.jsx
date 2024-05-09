import Register from "Pages/Auth/Register"
import Home from "Pages/Home"
import NotFound from "Pages/NotFound"
import { Route, Routes } from "react-router-dom"
import Login from './../Pages/Auth/Login';

function MainRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/register" element={<Register />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
      
        <Route path="*" element={<NotFound />} ></Route>
    </Routes>
  )
}

export default MainRoutes
