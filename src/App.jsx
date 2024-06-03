import React from "react"
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Benefits from "./components/benefits/benefits";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
 

  return (
     <div >
       <Home></Home>
      <Navbar/>
      <Benefits/>
     </div>
  )
}

export default App
