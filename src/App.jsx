import {Route, Routes} from "react-router-dom"
import React from "react"

import Home from "./pages/Home"
import SideNav from "./Dashboard/SideNav"
import Courses from "./pages/Courses"
import Cart from "./components/Cart"
import About from "./pages/About"


function App (){
    return <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/sidenav" element={<SideNav />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />

    </Routes>

}
export default App  