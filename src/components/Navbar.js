import React from 'react'
import Button from "./Button.js"
import logo from "../img/DreamttLogo.png"
import {FaShoppingCart} from "react-icons/fa"

function Navbar() {
    return (
        
            <nav className="flex realtive rounded-lg  bg-gradient-to-br from-purple-600 to-purple-600 place-content-between">
                <div className="Logo flex justify-between p-1 place-self-start h-28 w-80">
                    <img className="m-0 p-0" src={logo} alt={"Dreamtt logo"}/>
                    <div className="text-gray-100 block ml-2 text-2xl justify-self-start self-center font-bold"><span className="text-purple-100 font bold">Yerba Mate</span> Shop</div>

                </div>

                <div className="place-items-end">
                    <ul className="flex h-full justify-items-auto items-center">
                        <Button href="#Home" btnName="Home"/>
                        <Button href="#Yerba" btnName="Yerba"/>
                        <Button href="#About" btnName="About"/>
                        <Button href="#Contact" btnName="Contact"/>
                    </ul>
                </div>

                <div className="relative left-24">
                <FaShoppingCart className="mx-auto relative mt-6 cursor-pointer text-5xl text-gray-200"/>
                <p className="h-1 absolute font-bold text-gray-800 top-8 left-6">0</p>
                </div>

                <hr className="h-4 bg-blue-600 text-blue-600" />
                
            </nav>
    
    )
}

export default Navbar
