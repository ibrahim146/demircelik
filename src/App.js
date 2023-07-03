
import './App.css';
import './style.css';
import Navbar from './Navbar';
import Cart from './Cart.jsx'
import {  Routes } from 'react-router-dom';
import All from './All';
import All2 from './All2';

import { Route  } from 'react-router-dom';
import Carusel from './carusell/Carusel';
function  App() {
  return (
    <div className="App">
      <Navbar />
     
      
      <Routes>
      <Route exact path="/" element={<Cart />} />
      <Route exact path="/çelik-konstrüksiyon-ve-ferforje-grubu" element={<Carusel />} />                            
      <Route exact path="/ofis-metal-aksamları-grubu" element={<All2 />} />                            
     
      </Routes>  </div>
    
  );
}

export default App;
