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
         <img src={resim} alt="" />
        </Link>

        <div className={barsclass} >
          <ul >

            <li><Link to="/" className='buttonn' >anasayfa</Link></li>
            <li><Link to="/hakkımızda" className='buttonn' >hakkımızda</Link></li>
            <li><Link to="/GALERİMİZ" className='buttonn' >galerimiz</Link></li>
            <li><Link to="/projelerimiz" className='buttonn' >projelerimiz</Link></li>
            <li><Link to="/iletişim" className='buttonn' >ıletisim</Link></li>
            
          </ul>
        </div>
        <div className='barss'  >
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