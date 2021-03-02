import React from 'react';



function Hero() {
    return (
        <section  className="shadow-lg h-auto rounded  w-full ">
        <div className=" w-auto h-auto bg-gradient-to-br from-gray-100 to-gray-300">
       
            <h1 className="p-6 mb-10 font-serif text-gray-800 text-8xl tracking-wide text-center">Welcome in Your favorite <br></br> <span className="text-purple-800 m-1">Yerba Mate</span> shop!</h1>
                 <div className="list-none transition-all bg-gray-100 w-32 font-bold duration-200 ease-in shadow leading-none p-3  text-2xl border-2 border-solid text-purple-600 border-purple-600 hover:bg-purple-600 transform hover:-translate-y-1 hover:scale-110 rounded-md hover:text-gray-100 mx-auto"><a href="#Yerba">Buy now!</a></div>
            <p className="text-center  text-3xl p-6">Here You can find various types of Yerba and we also offer super fast <span className="text-purple-800 m-1">One Day Delivery</span>.</p>
            
        </div>
        
  
        </section>
    )
}

export default Hero
