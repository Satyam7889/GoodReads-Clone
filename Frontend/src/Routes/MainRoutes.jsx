import Home from "Pages/Home"
import NotFound from "Pages/NotFound"
import { Route, Routes } from "react-router-dom"

function MainRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} ></Route>
      
        <Route path="*" element={<NotFound />} ></Route>
    </Routes>
  )
}

export default MainRoutes
