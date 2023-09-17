import React from 'react'
import "./footer.css";
import { Link } from 'react-router-dom';
const Foterr = () => {
    return (
        <section className='footer' style={{ marginTop: "40px" }}>
            <div className='social'>
                <a href="https://www.instagram.com/" target='_blank'><i className='fa fa-instagram'></i></a>
                <a href="https://tr-tr.facebook.com/"  target='_blank'><i className='fa fa-facebook'></i></a>
                <a href="https://twitter.com/?lang=tr" target='_blank'><i className='fa fa-twitter' target='_blank'></i></a>
                <a href="https://www.snapchat.com/tr-TR" target='_blank'><i className='fa fa-snapchat' target='_blank'></i></a>
            </div>

            <ul className='list'>
                <li>
                    <Link to="/" >anasayfa</Link>
                </li>
                <li>
                    <Link to="/iletişim" >ıletisim</Link>
                </li>

                <li>
                    <Link to="/hakkımızda" >hakkımızda</Link>
                </li>

                <li>
                    <Link to="/GALERİMİZ" >galerimiz</Link>
                </li>
                <li>
                    <Link to="/" >anasayfa</Link>
                </li>
            </ul>

            <p className='copyright'>future coders @ 2023 - ibrahim akyel -</p>
        </section >
    )
}

export default Foterr