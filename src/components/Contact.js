import React from 'react'

function Contact() {
    return (
        <div id="Contact" className="flex flex-col md:flex-row items-center bg-gradient-to-br from-purple-500 to-purple-800" >
            <div className="w-12/12 md:w-6/12 ">
                <form className="flex flex-col w-6/12 md:w-6/12 p-6 mx-auto">
                
                    <label className="font-bold text-gray-200"  htmlFor="fname">Your Name</label>
                    <input className="rounded-md font-bold" type="text" name="fname"></input>
                    <label className="font-bold text-gray-200" htmlFor="email">Your Email</label>
                    <input className="rounded-md" type="email" name="email"></input>

                    <label className="font-bold text-gray-200" htmlFor="message">Your message</label>
                    <textarea className="rounded-md" rows="4" cols="50" name="message"></textarea>
                    
                    <button className="hover:bg-purple-600 hover:text-gray-100 hover:border-solid border-2 hover:border-gray-100 bg-gray-100 w-6/12 rounded-lg mt-2 font-bold text-purple-600" type="submit">Send</button>
                </form>
            </div>

            <div className="w-6/12 mb-2">
            <h1 className="text-xl md:text-2xl text-gray-100 text-bold">Contact Us</h1>
                <p className="text-gray-200 text-md md:text-lg">Phone number: 0751354213</p>
                <p className="text-gray-200 text-md md:text-lg">Email: dreamtt@dreamtt.com</p>

                <h1 className="text-xl md:text-2xl text-gray-100 text-bold mt-2">Find Us</h1>
                <p className="text-gray-200 text-md md:text-lg">41 Dreamt street <br/> DT1 0PA <br/> Dreamtshire</p>
            </div>
        </div>
    )
}

export default Contact
