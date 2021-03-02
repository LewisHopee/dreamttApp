import React from 'react';
import {FaTwitterSquare} from "react-icons/fa";
import {FaFacebookSquare} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";

function YearCopyright() {
  return  <p className="text-lg" id="copyright-year">&copy; Dreamtt {new Date().getFullYear()} </p>;
}

class Footer extends React.Component {

  render() {

    return (

      <div className="" id="footer">
    
          <div className="p-2">
            <YearCopyright />
            <div className="flex justify-center ">
            <a href="https://twitter.com/home"><i className="text-xl text-purple-800 "><FaTwitterSquare/></i></a>
            <a href="https://www.facebook.com/"><i className="text-xl text-purple-800 "><FaFacebookSquare/></i></a>
            <a href="https://www.linkedin.com/feed/"><i className="text-xl text-purple-800 "><FaLinkedin/></i></a>
            </div>
          </div>
    </div>
    

    )
  }
}

export default Footer;


