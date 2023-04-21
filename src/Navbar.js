import React, { useState } from 'react';
import './css.css';
import './style.css';

const Navbar = () => {
  const [barsclass, setbarsclass] = useState("close")
  return (
    <>
      <div className='navbar'>
        <div className='logo'>
          LOGO
        </div>

        <div className={barsclass}>
          <ul>
            <li>anasayfa</li>
            <li>iletişim</li>
            <li>galerimiz</li>
            <li>hakkımızda</li>
            <li>anasayfa</li>
            <li>anasayfa</li>
            
          </ul>
        </div>
        <div className='barss'>
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