import React, { useState } from 'react';
import './css.css';
import './style.css';
import  resim  from "./image/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [barsclass, setbarsclass] = useState("close")
  return (
    <>
      <div className='navbar'>
        <Link to="/" className='logo'>
         <img  data-aos="fade-right" src={resim} alt="" />
        </Link>

        <div className={barsclass} >
          <ul >

            <li data-aos="fade-down" id='animation'><Link to="/" className='buttonn' >anasayfa</Link></li>
            <li data-aos="fade-down" id='animation'><Link to="/" className='buttonn' >ıletisim</Link></li>
            <li data-aos="fade-down" id='animation'><Link to="/" className='buttonn' >hakkımızda</Link></li>
            <li data-aos="fade-down" id='animation'><Link to="/" className='buttonn' >galerimiz</Link></li>
            <li data-aos="fade-down" id='animation'><Link to="/" className='buttonn' >anasayfa</Link></li>
            
            
          </ul>
        </div>
        <div className='barss'  data-aos="fade-left">
          <input type="checkbox" id="checkbox" />
          <label for="checkbox" class="toggle" onClick={() => {setbarsclass(barsclass === "menü" ? "close" : "menü")}}>
            <div class="bars" id="bar1"></div>
            <div class="bars" id="bar2"></div>
            <div class="bars" id="bar3"></div>
          </label>
        </div>
      </div>

    </>
  )
}

export default Navbar