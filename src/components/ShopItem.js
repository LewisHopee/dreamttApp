import React from 'react';



function ShopItem(props) {
    return (
            
            <div className="h-6/12 shadow-xl bg-gray-100 rounded-md w-6/12 mb-2 sm:mx-1 sm:w-4/12 md:w-3/12"> 
            {props.children}
            <div className="h-6/12 bg-gray-100 m-1 rounded w-6/12 mx-auto">
            <h3 className="w-full font-semibold text-md">{props.itemName}</h3>
            <p className="font-bold text-purple-800 text-lg">{props.price}</p>
            <button className="m-1 duration-300 text-gray-100 border-purple-400 bg-purple-600 border-solid border-2 rounded p-2 font-bold transform md:border-gray-800 md:hover:border-purple-600 md:hover:bg-purple-600 hover:-translate-y-0.5 md:text-gray-800 md:hover:text-gray-100">Add to cart</button>
            </div>
            </div>
            
       
    )
}

export default ShopItem
