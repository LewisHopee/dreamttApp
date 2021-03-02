import React from "react";

function Button(props){
    return(
        <li className="shadow-md list-none text-purple-800 bg-gray-200 transition-all mx-6 w-32 font-bold duration-200 ease-in shadow leading-none p-4 mx-1 text-2xl border-2 border-solid border-purple-600 hover:border-purple-200 hover:bg-purple-600 transform hover:-translate-y-1  rounded-md hover:text-gray-100"><a href={props.href}>{props.btnName}</a></li>
    )
}

export default Button;