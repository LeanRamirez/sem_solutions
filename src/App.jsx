import React from "react"
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Trabajos from "./components/trabajos/trabajos";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
 

  return (
     <div >
       <Home></Home>
      <Navbar/>
      <Trabajos/>
     </div>
  )
}

export default App
