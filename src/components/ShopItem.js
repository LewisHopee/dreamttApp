import React from 'react';



function ShopItem(props) {
    return (
            
            <div className="shadow-xl bg-gray-100 rounded-md w-3/12 mb-4 mx-4"> 
            {props.children}
            <div className="bg-gray-100 m-1 rounded w-6/12 mx-auto">
            <h3 className="w-full font-semibold">{props.itemName}</h3>
            <p className="font-bold text-purple-800">{props.price}</p>
            <button className="m-1 duration-300 bg-gray-100 border-solid border-gray-800 border-2 rounded p-2 font-bold transform hover:border-purple-600 hover:bg-purple-600 hover:-translate-y-0.5 hover:text-gray-100">Add to cart</button>
            </div>
            </div>
            
       
    )
}

export default ShopItem
