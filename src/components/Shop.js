import React from 'react';
import ShopItem from "../components/ShopItem.js";
import image1 from "../img/Yerba1.jpg";
import image2 from "../img/Yerba2.jpg";
import image3 from "../img/Yerba3.jpg";
import image4 from "../img/Yerba4.jpg";
import image5 from "../img/Yerba5.jpg";
import image6 from "../img/Yerba6.jpg";


function Shop() {
    return (
        <div id="Yerba" className="bg-gradient-to-br from-purple-500 to-purple-800  flex flex-wrap p-4  justify-center content-center">

        <ShopItem price="£3.99" itemName="CBSe Guarana Energy 1kg"><img className="w-auto h-auto mx-auto" src={image1} alt="Yerba Mate"></img></ShopItem>
           
        <ShopItem price="£5.99" itemName="Canarias Yerba Mate 1kg"><img className="w-auto h-auto mx-auto" src={image2} alt="Yerba Mate"></img></ShopItem>
        
        <ShopItem price="£4.59" itemName="Taragui Classic 1kg"><img className="w-auto h-auto mx-auto" src={image3} alt="Yerba Mate"></img></ShopItem>
                
        <ShopItem price="£3.99" itemName="Taragui Energy 1kg"><img className="w-auto h-auto mx-auto" src={image4} alt="Yerba Mate"></img></ShopItem>
        
        <ShopItem price="£7.99" itemName="La Merced De Campo 1kg"><img className="w-auto h-auto mx-auto" src={image5} alt="Yerba Mate"></img></ShopItem>
        
        <ShopItem price="£3.49" itemName="Taragui Lemon Taste 1kg"><img className="w-auto h-auto mx-auto" src={image6} alt="Yerba Mate"></img></ShopItem>
        
          

        </div>
    )
}

export default Shop
