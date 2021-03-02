
import './App.css';
import Navbar from "../src/components/Navbar.js";
import Hero from "../src/components/Hero.js";
import Shop from "../src/components/Shop.js";
import About from "../src/components/About.js";
import Contact from "../src/components/Contact.js";
import Footer from "../src/components/Footer.js";
import PopUpCart from "../src/components/PopUpCart.js";


function App() {
  
  

  return (
    <div className="App rounded bg-gray-200 ">
    <Navbar />
    <Hero/>
    <Shop/>
    <PopUpCart/>
    <About/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
