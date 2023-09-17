import React from 'react'
import "./footer.css"
const Foterr = () => {
    return (
       <section className='footer' style={{marginTop:"40px"}}>
            <div className='social'>
                <a href="#"><i className='fa fa-instagram'></i></a>
                <a href="#"><i className='fa fa-facebook'></i></a>
                <a href="#"><i className='fa fa-twitter'></i></a>
                <a href="#"><i className='fa fa-snapchat'></i></a>
            </div>

            <ul className='list'>
                <li>
                    <a href="#">home</a>
                </li>
                <li>
                    <a href="#">services</a>
                </li>

                <li>
                    <a href="#">about</a>
                </li>

                <li>
                    <a href="#">tems</a>
                </li>
                <li>
                    <a href="#">help</a>
                </li>
            </ul>

            <p className='copyright'>future coders @ 2023 - ibrahim akyel -</p>
       </section >
    )
}

export default Foterr