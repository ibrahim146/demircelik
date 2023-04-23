import React, { useState } from 'react';
import './css.css';
import './style.css';
import  resim  from "./image/logo.png";

const Navbar = () => {
  const [barsclass, setbarsclass] = useState("close")
  return (
    <>
      <div className='navbar'>
        <div className='logo'>
         <img  data-aos="fade-right" src={resim} alt="" />
        </div>

        <div className={barsclass} >
          <ul >
            <li data-aos="fade-down" id='animation'>anasayfa</li>
            <li data-aos="fade-down" id='animation'>iletişim</li>
            <li data-aos="fade-down" id='animation'>galerimiz</li>
            <li data-aos="fade-down" id='animation'>hakkımızda</li>
            <li data-aos="fade-down" id='animation'>anasayfa</li>
            <li data-aos="fade-down" id='animation'>anasayfa</li>
            
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