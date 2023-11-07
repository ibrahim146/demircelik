import React, { useState } from 'react';
import "./projelerimiz.css";
import Footer from '../Foterr';
import resim1 from "../resim/resim (9).jpg";


const Projelerimiz = () => {
  const [open, setopen] = useState("projec_closed");
  function closed() {
    setopen("projec_closed")
  };
  function opened() {
    setopen("open")
  }
  return (
    <>
      <div className='projeler_container'>
        <div className='projeler_başlık'>
          <h1 style={{ color: "rgba(81, 81, 206, 0.982)" }}>PROJELERİMİZ</h1>
          <hr style={{ color: "green", width: "90%", margin: "13px" }} />
          <div className='proje_alan'>




            <div style={{ cursor: "pointer" }} onClick={() => { opened() }} class="card_proje" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
              <span onClick={() => { opened() }} className='imgg'></span>
              <div onClick={() => { opened() }} class="card-front">
                <p onClick={() => { opened() }} class="title">İÇTAŞ YSS KARAYOLU </p>
                <p onClick={() => { opened() }} class="subtitle">projesi-2022</p>
              </div>
            </div>

            <div style={{ cursor: "pointer" }} onClick={() => { opened() }} class="card_proje" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
              <span onClick={() => { opened() }} className='imgg'></span>
              <div onClick={() => { opened() }} class="card-front">
                <p onClick={() => { opened() }} class="title">İÇTAŞ YSS KARAYOLU </p>
                <p onClick={() => { opened() }} class="subtitle">projesi-2022</p>
              </div>
            </div>

            <div style={{ cursor: "pointer" }} onClick={() => { opened() }} class="card_proje" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
              <span onClick={() => { opened() }} className='imgg'></span>
              <div onClick={() => { opened() }} class="card-front">
                <p onClick={() => { opened() }} class="title">İÇTAŞ YSS KARAYOLU </p>
                <p onClick={() => { opened() }} class="subtitle">projesi-2022</p>
              </div>
            </div>

            <div style={{ cursor: "pointer" }} onClick={() => { opened() }} class="card_proje" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
              <span onClick={() => { opened() }} className='imgg'></span>
              <div onClick={() => { opened() }} class="card-front">
                <p onClick={() => { opened() }} class="title">İÇTAŞ YSS KARAYOLU </p>
                <p onClick={() => { opened() }} class="subtitle">projesi-2022</p>
              </div>
            </div>

            <div style={{ cursor: "pointer" }} onClick={() => { opened() }} class="card_proje" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
              <span onClick={() => { opened() }} className='imgg'></span>
              <div onClick={() => { opened() }} class="card-front">
                <p onClick={() => { opened() }} class="title">İÇTAŞ YSS KARAYOLU </p>
                <p onClick={() => { opened() }} class="subtitle">projesi-2022</p>
              </div>
            </div>

            <div style={{ cursor: "pointer" }} onClick={() => { opened() }} class="card_proje" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
              <span onClick={() => { opened() }} className='imgg'></span>
              <div onClick={() => { opened() }} class="card-front">
                <p onClick={() => { opened() }} class="title">İÇTAŞ YSS KARAYOLU </p>
                <p onClick={() => { opened() }} class="subtitle">projesi-2022</p>
              </div>
            </div>

            <div style={{ cursor: "pointer" }} onClick={() => { opened() }} class="card_proje" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
              <span onClick={() => { opened() }} className='imgg'></span>
              <div onClick={() => { opened() }} class="card-front">
                <p onClick={() => { opened() }} class="title">İÇTAŞ YSS KARAYOLU </p>
                <p onClick={() => { opened() }} class="subtitle">projesi-2022</p>
              </div>
            </div>

            <div style={{ cursor: "pointer" }} onClick={() => { opened() }} class="card_proje" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
              <span onClick={() => { opened() }} className='imgg'></span>
              <div onClick={() => { opened() }} class="card-front">
                <p onClick={() => { opened() }} class="title">İÇTAŞ YSS KARAYOLU </p>
                <p onClick={() => { opened() }} class="subtitle">projesi-2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`projec_container ${open}`} >
        <span className='x' onClick={() => { closed() }} style={{ cursor: "pointer", zIndex: "660" }}>X</span>
        <div className='projec_detail_container'>
          <div className='projec_image'>
            <div className='image__'>
              <img src={resim1} alt="" />
              <img src={resim1} alt="" />
              <img src={resim1} alt="" />

            </div>
          </div>
          <div className='projec_detail'>
            <div className='new_detail'>
              <h1>karayolu projesi</h1>
              <br />
              <hr />
              <br />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
                recusandae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, tenetur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, corporis omnis.
                Magnam, quia quis tempora ducimus doloribus ipsa veritatis vel!
              </p>
              <br />
              <hr />
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </>
  )
}

export default Projelerimiz