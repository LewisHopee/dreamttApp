import React from "react";

function Button(props){
    return(
        <li className=" list-none text-purple-800 bg-gray-200 overflow-hidden transition-all w-21 sm:w-28 md:w-32 font-bold duration-200 ease-in shadow-md leading-none  lg:mx-1 mx-0 md:mx-1 text-xl p-1 md:p-2 lg:p-4 border-2 border-solid border-purple-600 hover:border-purple-200 hover:bg-purple-600 transform hover:-translate-y-1  rounded-md hover:text-gray-100"><a href={props.href}>{props.btnName}</a></li>
    )
}

export default Button;