
import React from 'react';
import yerbaAbout from "../img/YerbaAbout.jpg";
import yerbaAbout2 from "../img/YerbaAbout2.jpg";

function About() {
    return (
        <div className="flex rounded-md justify-start items-center bg-gradient-to-br from-gray-100 to-gray-300 p-10" id="About">
            <div className="w-7/12 ">
            <h1 className=" shadow-sm mb-4 text-6xl font-bold font-serif p-2 text-center">About our shop 🙈</h1>
            <p className="text-center text-xl p-2">We are one of most recommended Yerba Mate shop in EU with base in UK. Our adventure started in 1999 and since then we try to deliver best quality Yerba Mate to our customers. </p>

            <h3 className="shadow-sm text-center font-serif font-bold text-xl p-2">What is Yerba? 🤔</h3>
            <p className=" text-center p-2 text-xl ">Leaves from Ilex paraguariensis are harvested to make mate, Chimarrão & Tereré – hugely popular beverages in Uruguay, Argentina, Paraguay and Brazil. Yerba Mate has been used for thousands of years by the Guaraní People for stamina and as a natural remedy with numerous health benefits. Today people still swear by yerba mate as a source of energy, as a way of aiding weight loss and for general well-being.

Traditionally, mate is sipped from a natural gourd through a metal straw called the “bombilla”. UruShop is proud to bring you the widest selection of yerbas and accessories in the UK, as well as a growing range of traditional South American foods.</p>

            <h3 className="shadow-sm text-center font-serif font-bold text-xl p-2">Why our shop? 🥳</h3>
            <p className="text-center p-2 text-xl ">Because we offer fastest One Day Delivery , and the best quality of Yerba that You can get i Europe.</p>
            </div>

            <div className="w-3/12 mx-auto">
                <img className="w-full rounded-md h-full mb-2 shadow-md" src={yerbaAbout} alt="Yerba Mate"></img>
                <img className="w-full  rounded-md h-full shadow-md" src={yerbaAbout2} alt="Yerba Mate"></img>
            </div>
            
        </div>
    )
}

export default About
