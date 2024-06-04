import React from "react"
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Benefits from "./components/benefits/benefits";
import Testimonials from "./components/testimonials/testimonials";
import Footer from "./components/footer/footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


function App() {
 
  return (
     <div >
       <Home></Home>
      <Navbar/>
      <Benefits/>
      <Testimonials/>
      <Footer/>
     </div>
  )
}

export default App;

