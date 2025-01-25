import React from "react"
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header(){
    return<div className="flex justify-between items-center px-20 py-6 w-full bg-blue-500 text-white ">
<h1 className="text-4xl font-bold"><span className="border-4 border-orange-500 text-orange-500 p-4 rounded-full text-center text-2xl">E</span>
demy</h1>
<ul className="flex space-x-5 hidden sm:flex">
   <Link to="/"> <li>Home</li></Link>
   <Link to="/about"><li>About</li></Link> 
   <Link to="/courses"> <li>Courses</li></Link>
   <Link to="/cart"><li>Cart</li></Link> 
</ul>
<FaBars className="sm:hidden flex text-3xl" />
    </div>
}

export default  Header