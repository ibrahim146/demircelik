import React, { useRef, useState } from 'react';
import './css.css';
import './style.css';
import  resim  from "./image/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [barsclass, setbarsclass] = useState("close");
  const inputRef = useRef(null);
  const handleDivClick = () => {
    setbarsclass("close")
    inputRef.current.click();
  };
  return (
    <>
      <div className='navbar'>
        <Link to="/" className='logo'>
         <img src={resim} alt="logo" />
        </Link>

        <div className={barsclass} >
          <ul >

            <li><Link to="/" className='buttonn' onClick={handleDivClick}>anasayfa</Link></li>
            <li><Link to="/hakkımızda"   className='buttonn' onClick={handleDivClick}>hakkımızda</Link></li>
            <li><Link to="/projelerimiz" className='buttonn' onClick={handleDivClick}>projelerimiz</Link></li>
            <li><Link to="/GALERİMİZ" className='buttonn' onClick={handleDivClick}>galerimiz</Link></li>
            <li><Link to="/iletişim" className='buttonn' onClick={handleDivClick}>ıletisim</Link></li>
          </ul>
           
        </div>
        <div className='barss'>
        <input className='name' type="checkbox" id="checkbox" ref={inputRef} />
          <label  htmlFor="checkbox" className="toggle" onClick={() => {setbarsclass(barsclass === "menü" ? "close" : "menü")}}>
           <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
        </div>
      </div>

    </>
  )
}

export default Navbar