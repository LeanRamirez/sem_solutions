
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Benefits from "./components/benefits/benefits";
import Testimonials from "./components/testimonials/testimonials";
import Form from "./components/form/form";
import Footer from "./components/footer/footer";
import WhatsappButton from "./components/whatsappButton/whatsappButton";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';


// Añade todos los iconos solid a la librería
library.add(fas);

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';



function App() {
 
  return (
     <div>
      <Home/>
      <Navbar/>
      <Benefits/>
      <Testimonials/>
      <Form/>
      <Footer/>
      <WhatsappButton/>
     </div>
  )
}

export default App;

