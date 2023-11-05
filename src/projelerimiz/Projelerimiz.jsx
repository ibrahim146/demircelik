import React from 'react';
import "./projelerimiz.css";
import Footer from '../Foterr';
const Projelerimiz = () => {
  return (
    <>
      <div className='projeler_container'>
        <div className='projeler_başlık'>
          <h1 style={{ color: "rgba(81, 81, 206, 0.982)" }}>PROJELERİMİZ</h1>
          <hr style={{ color: "green", width: "90%", margin: "13px" }} />
          <div className='proje_alan'>


            

            <div class="card_proje" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
              <span className='imgg'></span>
              <div class="card-front">
                <p class="title">İÇTAŞ YSS KARAYOLU </p>
                <p class="subtitle">projesi-2022</p>
              </div>
              <div class="card-back">
                <p>avrupa yakası yavuz sultan selim köprüsü , kuzey marmara oto yolu üzeri 16'cı ve 17'ci viyadükler üzeri ses perdesi calışmamız   </p>
              </div>
            </div>

            <div class="card_proje" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
              <span className='imgg'></span>
              <div class="card-front">
                <p class="title">karayolu projesi</p>
                <p class="subtitle">Web Dev</p>
              </div>
              <div class="card-back">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div class="card_proje" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
              <span className='imgg'></span>
              <div class="card-front">
                <p class="title">karayolu projesi</p>
                <p class="subtitle">Web Dev</p>
              </div>
              <div class="card-back">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div class="card_proje" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
              <span className='imgg'></span>
              <div class="card-front">
                <p class="title">karayolu projesi</p>
                <p class="subtitle">Web Dev</p>
              </div>
              <div class="card-back">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div class="card_proje" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
              <span className='imgg'></span>
              <div class="card-front">
                <p class="title">karayolu projesi</p>
                <p class="subtitle">Web Dev</p>
              </div>
              <div class="card-back">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div class="card_proje" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
              <span className='imgg'></span>
              <div class="card-front">
                <p class="title">karayolu projesi</p>
                <p class="subtitle">Web Dev</p>
              </div>
              <div class="card-back">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div class="card_proje" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
              <span className='imgg'></span>
              <div class="card-front">
                <p class="title">karayolu projesi</p>
                <p class="subtitle">Web Dev</p>
              </div>
              <div class="card-back">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div class="card_proje" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
              <span className='imgg'></span>
              <div class="card-front">
                <p class="title">karayolu projesi</p>
                <p class="subtitle">Web Dev</p>
              </div>
              <div class="card-back">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Projelerimiz