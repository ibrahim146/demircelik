import React from 'react'
import "./footer.css";
import { Link } from 'react-router-dom';
const Foterr = () => {
    return (
        <section className='footer' style={{ marginTop: "40px" }}>

            <ul className='list'>
                <li>
                    <Link to="/" >anasayfa</Link>
                </li>
                <li>
                    <Link to="/hakkımızda" >hakkımızda</Link>
                </li>
                <li>
                    <Link to="/projelerimiz" >projelerimiz</Link>
                </li>
                <li>
                    <Link to="/GALERİMİZ" >galerimiz</Link>
                </li>

                <li>
                    <Link to="/iletişim" >iletisim</Link>
                </li>
            </ul>
            <p className='copyright'>future coders @ 2023</p>
        </section >
    )
}

export default Foterr