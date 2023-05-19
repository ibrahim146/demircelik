
import './App.css';
import './style.css';
import Navbar from './Navbar';
import Cart from './Cart.jsx'
import {  Routes } from 'react-router-dom';
import All from './All';
import All2 from './All2';

import { Route  } from 'react-router-dom';
function  App() {
  return (
    <div className="App">
      <Navbar />
     
      
      <Routes>
      <Route exact path="/" element={<Cart />} />
      <Route exact path="/çelikkonstrüksiyonveferforjegrubu" element={<All />} />                            
      <Route exact path="/ofismetalaksamları" element={<All2 />} />                            
     
      </Routes>  </div>
    
  );
}

export default App;
