import React from 'react';
import ShopItem from "./ShopItem.js";
import image1 from "../img/Yerba1.jpg"

function PopUpCart() {
    return (
        <div className="fixed hidden w-full h-full z-10 top-1/3 translate-x-1/3 left-12  transform">
            <ShopItem price="£3.99" itemName="CBSe Guarana Energy 1kg"><img className="w-auto h-auto mx-auto" src={image1} alt="Yerba Mate"></img></ShopItem>
        </div>
    )
}

export default PopUpCart
