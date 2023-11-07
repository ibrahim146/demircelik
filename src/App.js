import './App.css';
import './style.css';
import Navbar from './Navbar';
import Cart from './Cart.jsx'
import { Routes } from 'react-router-dom';
import All2 from './ofis_metal_aksamları/All2';
import { Route } from 'react-router-dom';
import Carusel from './carusell/Carusel';
import Galerimiz from './galerimiz/Galerimiz';
import Hakkımızda from './hakkımızda/Hakkımızda';
import İletişim from "./iletişim/İletişim";
import Projelerimiz from './projelerimiz/Projelerimiz';
function App() {
  return (
    <div className="App">
      <div className='ulasım'>
        <a data-aos="fade-left" href="https://www.instagram.com/yetis_metal/?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr" target='_blank' className='ulasım_instagram'>
          <i className='fa fa-instagram'></i>
        </a>
        <a href="https://api.whatsapp.com/send?phone=905377489197" target='_blank' data-aos="fade-left" className='ulasım_whatsapp'>
          <i className='fa fa-whatsapp'></i>
        </a>
      </div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Cart />} />
        <Route exact path="/çelik-konstrüksiyon-ve-ferforje-grubu" element={<Carusel />} />
        <Route exact path="/ofis-metal-aksamları-grubu" element={<All2 />} />
        <Route exact path="/GALERİMİZ" element={<Galerimiz />} />
        <Route exact path="/hakkımızda" element={<Hakkımızda />} />
        <Route exact path="/iletişim" element={<İletişim />} />
        <Route exact path="/projelerimiz" element={<Projelerimiz />} />
      </Routes>  </div>

  );
}

export default App;
