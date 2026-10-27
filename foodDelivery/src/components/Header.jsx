import React from 'react'
import { FaSearch } from "react-icons/fa";
import { LuBadgePercent } from "react-icons/lu";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <nav className="bg-orange-800 p-4 text-white flex justify-around border">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8NMfDkwFbJgovJvl-7EIy-0s3thVghwEcJlIl_sNK9rxL-mQpiY4eJtY&s=10" alt=""  
        width="70px"
        height="70px"
        />

        <ul className="flex gap-4 mt-3">
            <FaSearch  className="mt-1"/>
            <li>Search</li>
            <LuBadgePercent className="mt-1" />
            <li>offers</li>
            <IoMdHelpCircleOutline  className="mt-1"/>
            <li>Help</li>
            <IoPersonAddSharp className="mt-1" />
            <li>SignIN</li>
            <FaShoppingCart className="mt-1"/>
            <li>Cart</li>
        </ul>

    </nav>
  )
}
